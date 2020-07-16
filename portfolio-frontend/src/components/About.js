import React from 'react';

const About = () => {
  return (
    <div id='about' className='component'>
      {/* <img className="img-fluid" src={about} alt="about me" />' */}
      <div className='text' id='about-text'>
        <h1>ABOUT ME</h1>
        <h2>Digital Marketer Turned Software Engineer</h2>
        <div className='text-section'>
          <h6>My passion for using technologies to cultivate brands and develop strategies have led me to a path of software engineering.</h6>
          <h6>I enjoy experimenting with code to tackle both simple and complex problems.</h6>
          <i>In my spare time, you will find me climbing at the local bouldering gym or experimenting with new recipes like miso basil pasta!</i>
        </div>
        <div className='text-section' id='skills'>
          <h4> // Technical Skills</h4>
          <i>&raquo; Ruby, Rails, Sinatra, React, Redux, Javascript, PostgreSQL, SQL, HTML & CSS.</i>
          {/* <div className='text-section'></div> */}
        </div>
      </div>
    </div>
  )
}

export default About