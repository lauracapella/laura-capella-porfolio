import './index.scss'
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-subtitle.png'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faEnvelope, faUser, faSuitcase, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo'/>
{/*                 <img className='sub-log' src={LogoSubtitle} alt='laura capella'/>
 */}            </Link>
           
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    actveclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    actveclassname='active' 
                    className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    actveclassname='active' 
                    className='portfolio-link' to='/portfolio'>
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    actveclassname='active' 
                    className='contact-link' 
                    to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <FontAwesomeIcon 
                icon={faClose}
                onClick={() => setShowNav(false)}
                color='#d9ff02'
                size='3x'
                className='close-icon'
                />
            </nav>

            <ul>
            <li>
                <a 
                target='_blanck' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/laura-capella'>
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
                <a 
                target='_blanck' 
                rel='noreferrer' 
                href='https://github.com/lauracapella'>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
            </li>

            </ul>
        <FontAwesomeIcon 
             onClick={() => setShowNav(true)}
             icon={faBars}
             color='#d9ff02'
             size='3x'
             className='hamburger-icon'
        />
        </div>
    )
}

export default Sidebar;