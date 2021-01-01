import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Wrapper>
            <div className='banner'>
                    <div className='underline'></div>
                    <h2>I am Monika</h2>
                    <h1>I am a front-End developer</h1>
                    <Link to='/contact' className='btn'>
                        contact me
                    </Link>
               
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`

    .banner {
        background-color: var(--clr-main-green);
        height: 40vh;
        padding: calc(1.6rem + .6667vw);
        color: var(--clr-main-white);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-transform: capitalize;
        animation: banner 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    };

    @keyframes banner {
        0% {
            transform: translateX(100rem) rotate(360deg);
            opacity: 0;
        };
        100% {
            transform: translateX(0);
            opacity: .8;
        };
    }; 

    @media screen and (min-width: 768px) {
        .banner h1 {
            margin-bottom: 4vh;
        };
    }; 

`

export default Banner;
