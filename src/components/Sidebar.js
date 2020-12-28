import React from 'react';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import Links from '../constants/links';
import SocialLinks from '../constants/socialLinks';

const Sidebar = ({isOpen, toggleSidebar}) => {
    return (
        <Wrapper>
            <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
                <div>
                    <button className='close-btn' onClick={toggleSidebar} >
                        <FaTimes />
                    </button>
                </div>
                <div className='side-container'>
                   
                   <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
                   <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} />
                </div>
            </aside>
        </Wrapper>
    )
};

const Wrapper = styled.div`

    .sidebar {
        background: var(--clr-secondary);
        border-left: 1px solid var(--clr-main-grey);
        display: grid;
        height: 100%;
        place-items: center;
        position: fixed;
        right: 0%;
        top: 0%;
        width: 60%;
        opacity: 0;
        transform: translateX(100%);
        transition: var(--transition);
        z-index: 200;
   };

    .close-btn {
        background: transparent;
        border: none;
        color: var(--clr-pink);
        cursor: pointer;
        font-size: 1.5rem;
        position: fixed;
        right: 4%;
        top: 2%;
    };

    .show-sidebar {
        opacity: 1;
        transform: translateX(0);
    };

    /* ======================================
        links animation 
    ========================================= */

    .sidebar-links li {
        animation: slideRight .5s ease-in-out .3s forwards;
        list-style: none;
        opacity: 0;
    };

    .sidebar-links li:nth-of-type(1) {
        animation-delay: .25s;
    };

    .sidebar-links li:nth-of-type(2) {
        animation-delay: .5s;
    };

    .sidebar-links li:nth-of-type(3) {
        animation-delay: .75s;
    };

   .sidebar-links li:nth-of-type(4) {
        animation-delay: 1s;
    }; 

    @keyframes slideRight {
        0% {
            transform: translateX(-200px);
            opacity: 0;
        };
        100% {
            transform: translateX(0);
            opacity: 1;
        };
    };

    .sidebar-links li a {
        border-radius: var(--radius);
        display: block;
        text-transform: capitalize;
        color: var(--clr-main-grey);
        letter-spacing: var(--letter-spacing);
        margin-bottom: .5rem;
        font-size: 1rem;
        text-align: center;
        transition: var(--transition);
        padding: .2rem .2rem;  
    };

    .sidebar-links li a:link:hover,
    .sidebar-links li a:visited:hover {
        background: var(--clr-main-grey);
        color: var(--clr-main-white);
    };

    /* =============================================
     icons animation 
    ================================================ */

    .sidebar-icons li {
        opacity: 0;
        animation: slideUp .5s ease-in-out .3s forwards;
        list-style: none;
        margin-top: 1rem;
    };

    .sidebar-icons li:nth-of-type(1) {
        animation-delay: 1.25s;
    };

    .sidebar-icons li:nth-of-type(2) {
        animation-delay: 1.50s;
    };

    .sidebar-icons li:nth-of-type(3) {
        animation-delay: 1.75s;
    };

    @keyframes slideUp {
        0% {
            transform: translateY(20rem);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    };

    .social-links {
        display: flex;
        justify-content: space-between;
    };

    .social-link {
        color: var(--clr-main-grey);
        font-size: 1rem;
        transition: var(--transition);
    };

    .social-link:hover {
        color: var(--clr-main-green);
    };
`

export default Sidebar;
