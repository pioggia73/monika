import {createGlobalStyle} from 'styled-components';

const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;600&display=swap');

/* 
=====================================
VARIABLES
=====================================
*/

:root {
    /* colors */

    --clr-primary: #46fe03;
    --clr-secondary: #ff0;
    --clr-pink: #ff0669;
    --clr-main-grey: #555;
    --clr-light-grey: #eaede9;
    --clr-main-white: #f5f5f5;
    --clr-main-green: #225b27;

    /* fonts */
    --font-primary: 'Baloo Tamma 2', cursive;

    --transition: all .5s linear;
    --spacing: .2rem;
    --radius: .25rem;
    --letter-spacing: .2rem;
    --max-width: 1363px;
};

*,
::after,
::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};

body {
    font-size: 65.5%;
    border-left: 3px solid var(--clr-secondary);
    font-family: var(--font-primary);
    background-color: var(----clr-main-white);
};

a { text-decoration: none};

h1, h2 {
    margin-bottom: 1vh;
    color: var(----clr-main-white);
}

h1 { 
    font-size: calc(1.5rem + 1vw);
    line-height: 1.5;
    };

h2 { font-size: calc(1rem + 1vw); };

p { line-height: 1.1; };

.underline {
    background: var(--clr-main-green);
    height: .1rem;
    margin: 0 auto;
    margin-bottom: 2vh;
    width: 5rem;
};

// ***************  GLOBAL STYLE ***************//

.section {
    //background: var(--clr-main-white);
    height: calc(100vh - 3rem);
    padding: calc(2rem + 2vh) calc(2rem + 2vw);
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100vw;
    max-width: var(--max-width);
};

.center { width: 95vw; };

.section-title {
    color: var(--clr-main-green);
    text-align: center;
    text-transform: capitalize;
};

.btn {
    align-self: flex-start;
    color: var(--clr-main-white);
    display: inline-block;
    font-size: calc(.5rem + .6667vw);
    padding: calc(.1rem + .5vw) calc(.3rem + .5vw);
    position: relative;
    z-index: 1;
};

.btn::after {
    content: '';
    background-color: var(--clr-secondary);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: scaleX(0);
    transition: all .3s linear;
    width: 100%;
    transform-origin: right;
    z-index: -1;
};

.btn:hover:after {
    transform: scaleX(1);
    transform-origin: left;
};

`;

export default Globals;