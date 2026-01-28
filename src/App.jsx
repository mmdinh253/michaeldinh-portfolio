import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title/Title'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <div className='container'>
          <Title id='about' title='About'/>
          <About/>
          <Title id='projects' title='Projects'/>
          <Projects/>
          <Title id='resume' title='Resume'/>
          <Resume/>
          <Title id='contact' title='Contact'/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
