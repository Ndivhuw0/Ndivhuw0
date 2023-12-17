import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {LiaLinkedinIn, LiaGithub, LiaInstagram, LiaEnvelope} from 'react-icons/lia';
import './Navbar.css';


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    return (
        <div className="header">
            <nav className="navbar">
                <div className="social-menu">
                        <li><a href='https://www.instagram.com/n.d.i.v.h.u/?hl=en' target='_blank'  rel="noopener noreferrer"><LiaInstagram className='icon'/></a></li>
                        <li><a href='https://www.linkedin.com/in/ndivhuwo-maluleke' target='_blank'  rel="noopener noreferrer"><LiaLinkedinIn className='icon'/></a></li>
                        <li><a href='https://github.com/Ndivhuw0' target='_blank'  rel="noopener noreferrer"><LiaGithub className='icon'/></a></li>
                        <li><a href='mailto:maluleken04@gmail.com' target='_blank'  rel="noopener noreferrer"><LiaEnvelope className='icon'/></a></li>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#experience' onClick={closeMenu}>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar