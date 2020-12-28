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
        background: url(${backgroundImage});
        background-position: 95%;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: calc(100vh - 3rem);
        display: flex;
        justify-content: flex-start;
        align-items: center;
    };
`

export default Background;
