import React from 'react';
import { Route } from 'react-router-dom';

// const ProjectDetails = ({ match, projects }) => {
// const renderProject = project => {
// if (!!project) {
//   const projectStacks = project.stacks.map(stack => stack.name).join(' | ');
//   return (
//     <div>
//       <h1>{project.name}</h1>
//       <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
//       <i>{projectStacks}</i>
//       <p>{project.description}</p>

//       <button onClick={() => window.open(project.github_url, "_blank")}>Source Code</button>
//       <button onClick={() => window.open(project.blog_url, "_blank")}>Blog Post</button>
//       {/* <h4>Project Demo</h4> */}
//       {/* {project.demo_vid} */}
//       {/* <CommentsContainer comments={project.comments} /> */}
//     </div>
//   )
// } else {
//   return (<h3>Error 404: Project does not exist.</h3>)
// }
// }


const ProjectDetails = ({ project }) => {
  const projectStacks = project.stacks.map(stack => stack.name).join(' | ');
  return (
    <div>
      <h3>{project.name}</h3>
      <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
      <i>{projectStacks}</i>
      <p>{project.description}</p>

      <button className="btn btn-outline-warning" onClick={() => window.open(project.github_url, "_blank")}>Source Code</button>
      <button className="btn btn-outline-warning" onClick={() => window.open(project.blog_url, "_blank")}>Blog Post</button>
      {/* <h4>Project Demo</h4> */}
      {/* {project.demo_vid} */}
      {/* <CommentsContainer comments={project.comments} /> */}
      <hr />
    </div>
  )
}
// console.log(match.params.projectId)
// console.log(projects)

// let project = projects.find(proj => proj.id.toString() === match.params.projectId)
// const renderProject = () => {
//   if (!!project) {
//     const projectStacks = project.stacks.map(stack => stack.name).join(' | ');
//     return (
//       <div>
//         <h1>{project.name}</h1>
//         <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
//         <i>{projectStacks}</i>
//         <p>{project.description}</p>

//         <button onClick={() => window.open(project.github_url, "_blank")}>Source Code</button>
//         <button onClick={() => window.open(project.blog_url, "_blank")}>Blog Post</button>
//         {/* <h4>Project Demo</h4> */}
//         {/* {project.demo_vid} */}
//         {/* <CommentsContainer comments={project.comments} /> */}
//       </div>
//     )
//   } else {
//     return (<h3>Error 404: Project does not exist.</h3>)
//   }
// }
// return (
//   // renderProject()
//   <div>Test</div>
// )
// }

export default ProjectDetails