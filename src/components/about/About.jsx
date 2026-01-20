import React from 'react'
import './About.css'
import portrait from '../../images/portrait.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={portrait} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>Hello, I'm Michael Dinh</h3>
            <h2>Aspiring Software Engineer</h2>
            <p>I'm a computer science graduate from the University of Washington
                with hands-on experience in software engineering, full-stack development, 
                and IT support. Proficient in Java, Python, and C/C++, 
                and have built scalable frontend and backend systems, APIs, 
                and cloud-based solutions while collaborating with diverse teams.
            </p>
        </div>
      
    </div>
  )
}

export default About
