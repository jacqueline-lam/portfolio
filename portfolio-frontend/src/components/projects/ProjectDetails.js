import React from 'react';

const ProjectDetails = ({ match, projects }) => {

  const project = projects.find(proj => proj.id.toString() === match.params.projectId)
  const renderProject = () => {
    const projectStacks = (
      <ul>
        {project.stacks.map(stack =>
          <li key={stack.id}>{stack.name}</li>
        )}
      </ul>
    );

    return [
      <div>
        <h3>{project.name}</h3>
        <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
        <i>{projectStacks}</i>
        <p>{project.description}</p>
        <button className="btn btn-outline-warning" onClick={() => window.open(project.github_url, "_blank")}>Source Code</button>
        <button className="btn btn-outline-warning" onClick={() => window.open(project.blog_url, "_blank")}>Blog Post</button><br /><br />
        <div>
          <h5>Project Demo</h5>
          <iframe width="560" height="315" src={project.demo_vid} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
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