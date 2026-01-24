import React, { useRef, useState } from 'react'
import next_icon from '../../images/next-icon.png'
import back_icon from '../../images/back-icon.png'

const Projects = () => {
  const slider = useRef(null)
  const [index, setIndex] = useState(0)
  const totalSlides = 3

  const slideForward = () => {
    if (index < totalSlides - 1) {
      setIndex(index + 1)
    }
  }

  const slideBackward = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <section className="projects" id="projects">
        <img src={back_icon} className="back-btn" onClick={slideBackward} />
        <img src={next_icon} className="next-btn" onClick={slideForward} />


      <div className="slider">
        <ul
          ref={slider}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          <li>
            <div className="slide">
              <h3>Project 1</h3>
              <span>2025</span>
              <p>Description</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <h3>Project 2</h3>
              <span>2025</span>
              <p>Description</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <h3>Project 3</h3>
              <span>2025</span>
              <p>Description</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects
