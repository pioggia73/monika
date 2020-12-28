import React from 'react';
import {FaLinkedin, FaGithubSquare, FaTwitterSquare} from 'react-icons/fa';

const socialLinks = [
    {
        id: 1,
        icon: <FaLinkedin className='social-icon'></FaLinkedin>,
        url: "https://www.linkedin.com/in/monika-wasilewska-8098921a9",
    },
    {
        id: 2,
        icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
        url: "https://github.com/pioggia73?tab=repositories",
    },
    {
        id: 3,
        icon: <FaTwitterSquare className='social-icon'></FaTwitterSquare>,
        url: "https://www.twitter.com",
    }
]

const tempSocialLinks = socialLinks.map(socialLink => {
    return (
        <li key={socialLink.id}>
            <a href={socialLink.url} className='social-link'>
                {socialLink.icon}
            </a>
        </li>
    );
});

export default ({styleClass}) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ''}`}>
            {tempSocialLinks}
        </ul>
    )
};