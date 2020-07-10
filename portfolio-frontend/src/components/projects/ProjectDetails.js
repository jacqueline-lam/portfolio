import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer'
// import BoldererAppPic from '../../../images/bolderer-sinatra-app_homepage.png'
// import projectPic from `../../../images/${project.image_url}`

const ProjectDetails = ({ match, projects }) => {

  const project = projects.find(proj => proj.id.toString() === match.params.projectId)
  const renderProject = () => {
    const projectStacks = (
      <div className="badge-wrapper">
        {project.stacks.map(stack =>
          <span key={stack.id} className="badge badge-pill badge-dark">{stack.name}</span>
        )}
      </div>
    );
    const fileName = project.image_url
    // special feature supported by webpack's compiler that allows you to get all matching modules starting from some base directory
    const images = require.context('../../images', true)
    let img = images('./' + fileName)

    return [
      <div className='component'>
        <h3>{project.name}</h3>
        {/* <img className='project-thumbnail' alt='project thumbnail' src={projectPic} /> */}
        {<img className='project-thumbnail' alt='project thumbnail' src={img} />}
        <h5>Stacks</h5>
        {projectStacks}
        <p>{project.description}</p>
        <button className="btn btn-outline-warning" onClick={() => window.open(project.github_url, "_blank")}>Source Code</button>
        <button className="btn btn-outline-warning" onClick={() => window.open(project.blog_url, "_blank")}>Blog Post</button><br /><br />
        <div>
          <h5>Project Demo</h5>
          <iframe title="Umami Pantry Demo" width="560" height="315" src={project.demo_vid} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <hr />

        <CommentsContainer project={project} />
      </div>
    ]
  }

  return (
    < >
      {project ? renderProject() : null}
    </>
  )
}
export default ProjectDetails