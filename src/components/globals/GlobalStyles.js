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
    --clr-main-white: #f5f5f5;
    --clr-main-green: #225b27;

    /* fonts */
    --font-primary: 'Baloo Tamma 2', cursive;

    --transition: all .5s linear;
    --spacing: .2rem;
    --radius: .25rem;
    --letter-spacing: .2rem;
    --max-width: 1170px;
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
    border-left: 2px solid var(--clr-secondary);
    font-family: var(--font-primary);
};

a { text-decoration: none};

h1 { 
    font-size: calc(1rem + 1vw);
    line-height: 1.5rem;
    margin-bottom: 1rem;
    };

h2 {
    font-size: calc(1rem + 1vw);
    margin-bottom: 1rem;
};

.btn {
    color: var(--clr-main-white);
    text-transform: uppercase;
    font-size: .6rem;
    position: relative;
    padding: .5rem .5rem;
    width: 8rem;
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
};

.btn:after {
    background-color: var(--clr-secondary);
    content: '';
    color: var(--clr-main-grey);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: scaleX(0);
    transition: all .45s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-origin: right;
    width: 100%;
};

.btn:hover:after {
    color: var(--clr-main-grey);
    transform: scaleX(1);
    transform-origin: left;
    z-index: -2;
};

.underline {
    background: var(--clr-main-green);
    height: .1rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 5rem;
};

// ***************  GLOBAL STYLE ***************//

.section {
    padding: calc(1rem + 2%);
    background: var(--clr-main-white);
};

.section-center {
    width: 95vw;
    margin: 0 auto;
    max-width: var(--max-width);
    height: calc(100vh - 3rem);
};

.section-title {
    color: var(--clr-main-green);
    text-align: center;
};

p {
    line-height: 1.1rem;
};

`;

export default Globals;