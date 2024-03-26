import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';

const StyledGeneratingContainer = styled.div`
    height: 15rem;
    width: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledText = styled.span`
    font-family: NBArchitekt;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    margin-top: 2rem;
`;

const StyledLoadingContainer = styled.div`
    width: 100%;
    height: 136px;
    position: relative;
    overflow: hidden;
    display: flex;
`;

const StyledLoadingBar = styled.div`
    width: 9px;
    height: 100%;
    background-color: ${({ completed }) => (completed ? '#FF003D' : '#191919')};
    margin-right: 8px;
`;

const Generating = () => {
    const numberOfBars = 40;
    const [progress, setProgress] = useState(0);
    const [dotCount, setDotCount] = useState(1);
  
    useEffect(() => {
      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress < numberOfBars ? prevProgress + 1 : 0));
      }, 125);
  
      const dotInterval = setInterval(() => {
        setDotCount((prevCount) => (prevCount < 3 ? prevCount + 1 : 1));
      }, 900);
  
      return () => {
        clearInterval(progressInterval);
        clearInterval(dotInterval);
      };
    }, [numberOfBars]);
  
    return (
      <StyledGeneratingContainer>
        <StyledLoadingContainer>
          {[...Array(numberOfBars)].map((_, index) => (
            <StyledLoadingBar key={index} completed={index < progress} />
          ))}
        </StyledLoadingContainer>
        <StyledText>GENERATING{Array(dotCount).fill('.').join('')}</StyledText>
      </StyledGeneratingContainer>
    );
  };

  export default Generating;