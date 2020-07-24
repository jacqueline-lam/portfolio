import React from 'react';
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'
import Blog from '../images/blog.png'
import Email from '../images/email.png'

const Contact = () => {
  return (
    <div id='contact' className='sidenav'>
      <div className='decoration-line'>CONTACT</div>
      <a href="https://www.linkedin.com/in/jacquelineklam/" target="_blank" rel="noopener noreferrer">
        <img alt="linkedin_icon" src={Linkedin} />
      </a>
      <a href="https://github.com/jacqueline-lam" target="_blank" rel="noopener noreferrer">
        <img alt="linkedin_icon" src={Github} />
      </a>
      <a href="https://dev.to/jacquelinelam" target="_blank" rel="noopener noreferrer">
        <img alt="linkedin_icon" src={Blog} />
      </a>
      <a href="mailto:jacqueline.karin.lam@gmail.com" target="_blank" rel="noopener noreferrer">
        <img alt="email_icon" src={Email} />
      </a>
    </div>
  )
}

export default Contact