import React from 'react';
import styled from 'styled-components';
import logo from '../images/crown.svg';
import { FaAlignRight } from 'react-icons/fa'; 
// components //
import Links from '../constants/links';

const Navbar = ({toggleSidebar}) => {
    return (
        <Wrapper>
           <nav className='navbar'>
               <div className='nav-center'>
                    <img  src={logo} className='company-logo' alt='logo' />
                    <button className='toggle-btn' onClick={toggleSidebar} >
                        <FaAlignRight />
                    </button>
                    <Links styleClass='nav-links' />
               </div>
           </nav>
        </Wrapper>
    )
};

const Wrapper = styled.nav`

    .navbar {
        background: var(--clr-secondary);
        height: 3rem;
        width: 100vw;
    };

    .nav-center {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: space-between;
        margin: 0 auto;
        width: 90%;
    };

    .company-logo {
        height: auto;
        width: 2rem;
    };

    .toggle-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.3rem;
        transition: var(--transition);
    };

    .toggle-btn:hover {
        color: var(--clr-primary);
    };

    .nav-links {
        display: none;
    };

    @media screen and (min-width: 768px) {

        .toggle-btn {
            display: none;
        };

        .nav-links {
            display: flex;
            justify-content: flex-end;
        };

        .nav-links li {
            margin-right: calc(2rem + 2vw);
            list-style: none;
        };

        .nav-links a:link,
        .nav-links a:visited {
            color: var(--clr-main-grey);
            font-size: 1rem;
            font-weight: bold;
            letter-spacing: var(--letter-spacing);
            padding: .3rem 0;
            position: relative;
            text-transform: capitalize;
        };

        .nav-links a:link::before,
        .nav-links a:visited::before,
        .nav-links a:link::after,
        .nav-links a:visited::after {
            content: '';
            position: absolute;
            width: 100%;
            height: .1rem;
            left: 0;
            background-color: var(--clr-main-grey);
            transition: all .3s cubic-bezier(1, 0, 0, 1);
            transform: scaleX(0);
        };

        .nav-links a:link::before,
        .nav-links a:visited::before {
            top: 0;
            transform-origin: left;
        };

        .nav-links a:link::after,
        .nav-links a:visited::after {
            bottom: 0;
            transform-origin: right;
        };

        .nav-links a:hover::before,
        .nav-links a:active::before,
        .nav-links a:hover::after,
        .nav-links a:active::after {
            transform: scaleX(1);
        };
    };
`;

export default Navbar;
