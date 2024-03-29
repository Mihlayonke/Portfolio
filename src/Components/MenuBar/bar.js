import './bar.scss';
import { Link , NavLink} from 'react-router-dom';
import Logo from '../../assets/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeCircleCheck, faHome, faUser, faCertificate, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <Link className='logo' to= '/'>
            <img className='img' src={Logo} alt='Logo'/>
        </Link>

        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact='true' activeclassname='active' className='home-link' to='/'  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'> </FontAwesomeIcon>
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='about-link' to='/about' onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'> </FontAwesomeIcon>
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='certificate-link' to='/certificates' onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faCertificate} color='#4d4d4e'> </FontAwesomeIcon>
            </NavLink>
            
            <NavLink exact ='true' activeclassname="active" className="project-link" to="/projects" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contacts' onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'> </FontAwesomeIcon>
            </NavLink>
            
        </nav>

        <ul>
            <li>
                <a target= "_blank" rel="noreferrer" href="https://www.linkedin.com/in/mihlayonke-tembe-280650151/">
                    <FontAwesomeIcon icon={faLinkedin } color='#4d4d4e'/> 
                </a>
            </li>
            <li>
                <a target= "_blank" rel="noreferrer" href="whatsapp://send?abid=0721787779&text=Hi Mihlayonke, I'm texting you from your portfolio website.">
                    <FontAwesomeIcon icon={faWhatsapp } color='#4d4d4e'/> 
                </a>
            </li>
            <li>
                <a target= "_blank" rel="noreferrer" href="https://github.com/Mihlayonke/">
                    <FontAwesomeIcon icon={faGithub } color='#4d4d4e'/> 
                </a>
            </li>
            <li>
                <a  href="mailto:mihlatembe@out.com">
                    <FontAwesomeIcon icon={faEnvelopeCircleCheck } color='#4d4d4e'/> 
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar;