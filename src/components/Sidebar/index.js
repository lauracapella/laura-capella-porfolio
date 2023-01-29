import './index.scss'
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-subtitle.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <>
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo'/>
{/*                 <img className='sub-log' src={LogoSubtitle} alt='laura capella'/>
 */}            </Link>
           
            <nav>
                <NavLink exact='true' actveclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink exact='true' actveclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
                <NavLink exact='true' actveclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
                </NavLink>
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

        </div>
    </>
)

export default Sidebar;