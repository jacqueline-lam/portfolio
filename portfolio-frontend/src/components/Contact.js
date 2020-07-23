import React from 'react';

const Contact = () => {
  const images = require.context('../images', true)
  const linkedinImg = images('./linkedin.png')
  const githubImg = images('./github.png')
  const blogImg = images('./blog.png')
  const emailImg = images('./email.png')

  return (
    // <div id='contact' className='component'>
    //   <h1>CONTACT ME</h1>
    //   <h2>Connect on Social</h2>
    //   <div className='icons'>
    //     <a alt="linkedin_icon" href="https://www.linkedin.com/in/jacquelineklam/" target="_blank">
    //       <img src={linkedinImg} />
    //     </a>
    //     <a alt="github_icon" href="https://github.com/jacqueline-lam" target="_blank">
    //       <img src={githubImg} />
    //     </a>
    //     <a alt="blog_icon" href="https://dev.to/jacquelinelam" target="_blank">
    //       <img src={blogImg} />
    //     </a>
    //   </div>
    //   <div>Send me a message</div>
    // </div>

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