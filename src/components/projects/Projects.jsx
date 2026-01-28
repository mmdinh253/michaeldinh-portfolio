import React, { useState } from 'react'
import './Projects.css'
import next_icon from '../../images/next-icon.png'
import back_icon from '../../images/back-icon.png'

const Projects = () => {
  const [index, setIndex] = useState(0)
  const totalSlides = 3

  const slideForward = () => {
    setIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    )
  }

  const slideBackward = () => {
    setIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    )
  }

  return (
    <section className="projects" id="projects">
      <img
        src={back_icon}
        className="back-btn"
        onClick={slideBackward}
        alt="Previous project"
      />

      <img
        src={next_icon}
        className="next-btn"
        onClick={slideForward}
        alt="Next project"
      />

      <div className="slider">
        <ul
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          <li>
            <a href="https://github.com/Monacr/FitSocial">
              <div className="slide">
                <h3>Backend Developer | FitSocial</h3>
                <span>March 2023</span>
                <ul>
                  <li>Developed a collaborative fitness tracking app using Rust (Rocket.rs), SurrealDB, and React Native</li>
                  <li>Focused on backend API development and frontend-backend synchronization for workout data features</li>
                  <li>Collaborated in a team of five using Git for version control and Agile sprints for progress tracking</li>
                </ul>
              </div>
            </a>
          </li>

          <li>
            <a href='https://docs.google.com/document/d/1EPQwU5icans-Xh2zdDBAKcVpKJACsDa-NKvKk141Fpw/edit?usp=sharing'>
              <div className="slide">
                <h3>Researcher and UI Designer | Fit-Fusion</h3>
                <span>December 2023</span>
                <ul>
                  <li>Designed an exercise partner matching app in Figma, targeting user motivation and consistency in workouts</li>
                  <li>Led user interviews, usability testing, and iterative prototyping to refine matching logic and interface flow</li>
                  <li>Presented design findings and user feedback analysis to guide development priorities</li>
                </ul>
              </div>
            </a>
          </li>

          <li>
            <a href='https://mmdinh253.github.io/thd-official-website'>
              <div className="slide">
                <h3>Web Developer | Doan THD Official Website</h3>
                <span>February 2025</span>
                <ul>
                  <li>Built a responsive and fast-loading youth group website using ReactJS and CSS</li>
                  <li>Improved UI/UX design for accessibility and ease of navigation across devices</li>
                  <li>Integrated announcements, resources, and media to serve a growing community audience</li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects
