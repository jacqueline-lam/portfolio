export const fetchBlogPosts = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BLOG' });
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://dev.to/api/articles?username=jacquelinelam'
    fetch(proxyurl + url)
      // execute asynchronous code, once resolved, we can use dispatch to update our store
      // .then() fn to parse JSON of response to this request
      .then(resp => resp.json())
      // grab the actual collection of project objects
      // call dispatch + send project JSON data to your store
      // action dispatched along with a payload of the projects JSON collection
      .then(respJSON => dispatch({ type: 'ADD_BLOG', blog: respJSON }))
      .catch(() => alert("Can’t access response from dev.to API. Blocked by browser?"))
  }
}

    // add CORs proxy to avoid no 'Access-Control-Allow-Origin' header error
    // prefixing URL with proxy URL causes the request to get made through that proxy
      // 1. Forwards request to url
      // 2. Receives resp from url
      // 3. Add Access-COntrol-Allow-Origin header to the resp
      // 4. Pass that resp, with added header, back to requesting frontend code