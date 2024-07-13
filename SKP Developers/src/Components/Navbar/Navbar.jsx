import React, {useEffect, useState} from "react";
import {NavLink} from 'react-router-dom';

import './Navbar.css'

export default function Navbar(){

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(<>
        <nav className={`container ${scrollPosition > 0 ? 'scrolled' : ''}`}>
            <div className="site-name">
                <img src='/src/assets/icon.png' className="logo"/>
                <a href='/'>SKP Developers</a>
            </div>

            <ul className='nav-links'>
                <li><NavLink to='/'> Home </NavLink></li>
                <li><NavLink to='/about'> About </NavLink></li>
                {/* <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/jobs'>Jobs</NavLink></li>
                <li><NavLink to='/contact'>Contact Us</NavLink></li> */}
                {/* <li><button className="btn">i</button></li> */}
            </ul>
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
            <ul className="sidebar-links">
                    <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
                    {/* <li><NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink></li>
                    <li><NavLink to="/services" onClick={toggleMenu}>Services</NavLink></li>
                    <li><NavLink to="/jobs" onClick={toggleMenu}>Jobs</NavLink></li>
                    <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li> */}
                </ul>
            </div>
            <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        </nav>
        </>
    )
}