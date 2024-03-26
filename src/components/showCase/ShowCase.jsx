import React from 'react';
import styled from 'styled-components';
import VideoContainer from './VideoContainer';

const ShowCaseContainer = styled.div`
    height: 33vh;
    position: relative;
    padding-bottom: 0.8rem;
`;

const StyledBlurContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    padding-top: .8rem;
`;

const ShowCase = () => {
    return (
        <ShowCaseContainer id='showCase' className='showCase-desktop'>
           <StyledBlurContainer className='blur-desktop'>
           </StyledBlurContainer>
           <VideoContainer />
        </ShowCaseContainer>
    );
};

export default ShowCase;