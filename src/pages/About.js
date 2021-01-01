
import React from 'react';
import styled from 'styled-components';
import aboutImage from '../images/about-img.jpg';
// ****** components ****** //
import Title from '../components/Title';

const About = () => {
    return (
        <Wrapper>
            <section className='about section'>
                    <div className='about-container center'>
                        <div className='about-info'>
                            <Title title='about me' />
                            <div className='underline'></div>
                            <p>
                                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
                            </p>

                        </div>
                        <div className='about-img'>
                            <div className='about-img--container'>
                            <img src={aboutImage} alt='about-image' />
                        </div>
                        </div>
                    </div>
            </section>
        </Wrapper>
    )
};

const Wrapper = styled.section`

    .about {
        height: calc(100vh - 3rem);
    };

    .about-container {
        height: 100%;
        display: flex;
    };

    .about-info {

        flex: 1 0 50vw;
        display: flex;
        flex-direction: column;
       
        p {
            line-height: 1.7;
            text-align: center;
        };
    };

    .about-img {
        display: none;
        flex: 1 0 40vw;
    };

    .about-img--container {
        width: 30vw;

        img {
            width: 100%;
        };
    };

    @media screen and (min-width: 600px) {

        .about-info {
            justify-content: center;
            align-content: center;
            padding: calc(1rem + 1vw);

                p {
                    line-height: 2;
                    font-size: calc(.4rem + .6667vw);
                };
        };

        .about-img {
            display: block;
            display: flex;
            justify-content: center;
            align-self: center;
            position: relative;
        };

        .about-img--container {
            position: relative;
        };

        .about-img--container:after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            background: var(--clr-main-green);
            top: 1.5rem;
            left: 1rem;
            z-index: -1;
        };
        
    };





`;

export default About;
