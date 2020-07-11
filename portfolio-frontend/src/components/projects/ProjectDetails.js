import React from 'react';
import Container from 'react-bootstrap/Container';
import { Markup } from 'interweave';
import CommentsContainer from '../../containers/CommentsContainer'

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
      <Container>
        <div className='component'>
          <h3>{project.name}</h3>
          {/* <img className='project-thumbnail' alt='project thumbnail' src={projectPic} /> */}
          {<img className='project-thumbnail' alt='project thumbnail' src={img} />}
          <h5>Stacks</h5>
          {projectStacks}
          <div className='text' id='project-text'>
            <h6>What is it?</h6>
            <p>{project.description}</p>
            <h6>Why did I decide to build this app?</h6>
            <p>{project.reason}</p>
            <h6>Features</h6>
            <Markup content={project.features} allowElements='true' />
          </div>
          {project.blog_url ? <button className="btn btn-outline-warning btn-lg" onClick={() => window.open(project.blog_url, "_blank")}>Blog Post</button> : null}
          {project.github_url ? <button className="btn btn-outline-warning btn-lg" onClick={() => window.open(project.github_url, "_blank")}>Source Code</button> : null}
          {project.demo_vid ?
            <div>
              <h5>Project Demo</h5>
              <iframe title="Umami Pantry Demo" width="560" height="315" src={project.demo_vid} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            :
            null
          }
          <hr />
          <CommentsContainer project={project} />
        </div>
      </Container>
    ]
  }

  return (
    < >
      {project ? renderProject() : null}
    </>
  )
}
export default ProjectDetails