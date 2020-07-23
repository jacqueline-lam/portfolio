import React from 'react';

const Contact = () => {
  const images = require.context('../images', true)
  const linkedinImg = images('./linkedin.png')
  const githubImg = images('./github.png')
  const blogImg = images('./blog.png')
  const emailImg = images('./email.png')

  return (
    <div id='contact' className='sidenav'>
      <div className='decoration-line'>CONTACT</div>
      <a href="https://www.linkedin.com/in/jacquelineklam/" target="_blank" rel="noopener noreferrer">
        <img alt="linkedin_icon" src={linkedinImg} />
      </a>
      <a href="https://github.com/jacqueline-lam" target="_blank" rel="noopener noreferrer">
        <img alt="linkedin_icon" src={githubImg} />
      </a>
      <a href="https://dev.to/jacquelinelam" target="_blank" rel="noopener noreferrer">
        <img alt="linkedin_icon" src={blogImg} />
      </a>
      <a href='mailto:jacqueline.karin.lam@gmail.com'>
        <img alt="email_icon" src={emailImg} />
      </a>
    </div>
  )
}

export default Contact