import React from 'react'
import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
       <p>© 2026 Michael Dinh</p> 
       <ul>
        <li>
          <a 
            className="social-icon-link linkedin"
            href="https://www.linkedin.com/in/michael-dinh-475735200/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            className="social-icon-link github"
            href="https://github.com/mmdinh253"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a 
            className="social-icon-link email"
            href="mailto:mmdinh253@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
       </ul>
      </div>
    </div>
  )
}

export default Footer
