export const fetchBlogPosts = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BLOG' });
    // call fetch, dispatching returned data
    // add CORs proxy to avoid no 'Access-Control-Allow-Origin' header error
    // prefixing URL with proxy URL causes the request to get made through that proxy
    // 1. Forwards request to url
    // 2. Receives resp from url
    // 3. Add Access-COntrol-Allow-Origin header to the resp
    // 4. Pass that resp, with added header, back to requesting frontend code
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://dev.to/api/articles?username=jacquelinelam'
    fetch(proxyurl + url)
      // we won't do anything with this data until we get resp back
      // take resp and turn into JS object notation
      // .then() fn to parse JSON of response to this request
      .then(resp => resp.json())
      // execute asynchronous code, once resolved, we can use dispatch to update our store
      // grab the actual collection of project objects
      // call dispatch + send project JSON data to your store
      // action dispatched along with a payload of the projects JSON collection
      .then(respJSON => dispatch({ type: 'ADD_BLOG', blog: respJSON }))
      .catch(() => alert("Can’t access response from dev.to API. Blocked by browser?"))
  }
}