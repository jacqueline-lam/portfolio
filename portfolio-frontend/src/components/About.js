import React from 'react';
import { Link } from 'react-router-dom'
import about from '../images/about.jpg'

const About = () => {
  return (
    <div id='about' className='component'>
      {/* <img className="img-fluid" src={about} alt="about me" />' */}
      <h1>ABOUT ME</h1>
      <h3>Digital Marketer Turned Software Engineer</h3>
      <h6>My passion for using technologies to cultivate brands and develop strategies have led me to a path of software engineering.</h6>
      <i>In my spare time, you'll find me climbing at the local bouldering gym or experimenting with new recipes like miso basil pasta!</i>

      <h5>Technical Skills</h5>
      <i>Ruby, Rails, React, Redux, Javascript, PostgreSQL, SQL, HTML & CSS.</i>

    </div>

    //   <div id="home" className="intro route bg-image">
    //     <div className="overlay-itro" ></div>
    //     <div className="intro-content display-table">
    //       <div className="table-cell">
    //         <div className="container">
    //           <h1 className="intro-title mb-4">I am Morgan Freeman</h1>
    //           <p className="intro-subtitle"><span className="text-slider-items">CEO DevFolio,Web Developer,Web Designer,Frontend
    //             Developer,Graphic Designer</span><strong className="text-slider"></strong></p>
    //           <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div >
  )
}

export default About