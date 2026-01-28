import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../images/logo.png'
import menu_icon from '../../images/menu-icon.png'
// import resume from '../../files/resume.pdf'

const Navbar = () => {

    // state of navbar when scrolling
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, []);

    // toggle menu
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} duration={500}>About</Link></li>
            <li><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
            <li><Link to='resume' smooth={true} duration={500}>Resume</Link></li>
            <li><Link to='contact' smooth={true} duration={500}><button className='btn'>Contact</button></Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
