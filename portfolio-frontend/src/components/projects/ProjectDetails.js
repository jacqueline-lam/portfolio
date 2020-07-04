import React from 'react';

const ProjectDetails = ({ match, projects }) => {
  console.log(match)
  console.log(projects)

  const project = projects.find(proj => proj.id.toString() === match.params.projectId)
  const renderProject = () => {
    const projectStacks = project.stacks.map(stack => stack.name).join(' | ');
    return [
      <div>
        <h3>{project.name}</h3>
        <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
        <i>{projectStacks}</i>
        <p>{project.description}</p>
        <button className="btn btn-outline-warning" onClick={() => window.open(project.github_url, "_blank")}>Source Code</button>
        <button className="btn btn-outline-warning" onClick={() => window.open(project.blog_url, "_blank")}>Blog Post</button><br /><br />
        <h5>Project Demo</h5>
        {/* {project.demo_vid} */}
        <hr />
      </div>
    ]
  }


  return (
    < >
      {project ? renderProject() : null}

      {/* <CommentsContainer comments={project.comments} /> */}
    </>
  )
}

export default ProjectDetails