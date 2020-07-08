export const addComment = comment => {
  // Thunk allows fn to take dispatch fn as an argument
  // gives us access to dispatch fn
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${comment.project_id}/comments`, {
      headers: {
        // data content sent to backend will be json
        'Content-Type': 'application/json',
        // what content types will be accepted on the return of data
        'Accept': 'application/json'
      },
      method: 'POST',
      // tell server to expect data as a JSON string
      body: JSON.stringify(comment)
    })
      //immediately render the new data
      .then(resp => resp.json())
      .then(newComment => dispatch({ type: 'ADD_COMMENT', comment: newComment }))
  }
}