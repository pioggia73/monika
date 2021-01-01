import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/HomeBcg.jpg';
import Banner from '../components/Banner';

const Background = ({isOpen}) => {
    return (
        <Wrapper>
            <section className='bcg'>
                <Banner />
            </section>
        </Wrapper>
    )
};

const Wrapper = styled.section`

    .bcg {
        align-items: center;
        background-image: url(${backgroundImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        height: calc(100vh - 3rem);
        justify-content: flex-start;
    };
`

export default Background;
