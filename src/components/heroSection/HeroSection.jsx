import React from 'react';
import styled, { keyframes } from 'styled-components';
import heroIMG from '../../assets/heroSection/heroIMG.png';
import heroIMG_desktop from '../../assets/heroSection/heroIMG_desktop.png';
import heroText from '../../assets/heroSection/heroText.png';
import heroText_desktop from '../../assets/heroSection/heroText_desktop.png';
import '../../styles/home.css';

const slideUp = keyframes`
  from {
    transform: translateY(80%);
  }
  to {
    transform: translateY(0);
  }
`;

const StyledHero = styled.div`
    position: relative;
    padding: 3rem .5rem;
    padding-bottom: 1rem !important;
    display: flex;
    justify-content: center;
`;

const StyledIMG = styled.img`
    position: absolute;
    top: 31%;
    animation: ${slideUp} 1.5s forwards;
`;

const HeroSection = () => {

    return (
        <div className='pageContainer'>
            <StyledHero className='mobile'>
                <img src={heroIMG} alt="hero image_mobile"/>
                <StyledIMG src={heroText} alt="hero text"/>
            </StyledHero>  
            <StyledHero className='desktop'>
                <img src={heroIMG_desktop} alt="hero image_desktop"/>
                <StyledIMG src={heroText_desktop} alt="hero text"/>
            </StyledHero>
        </div>
        
    );
};

export default HeroSection;