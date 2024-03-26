import React from 'react';
import styled from 'styled-components';

const StyledCarouselText = styled.img`
    margin-bottom: 1rem;
    width: 85%;
`;

const StyledIMGContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledCarouselIMG = styled.img`
    width: 98%;

    @media (min-width: 1360px) {
        margin-top: ${({position}) => (position === 2 ? '-7rem' : '')};
    }
`;

const SyledCarouselButtonContainer = styled.div`
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledButton = styled.span`
    width: ${({active}) => (active ? '2rem' : '1rem')};
    height: .2rem;
    background-color: ${({active}) => (active ? 'white' : '#4E4E4E')};
    margin-right: .5rem;
    cursor: pointer;
`;

const StyledcarouselSlide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 43vh;
    margin-top: -1rem;
`;

const StyledCarouselComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const CarouselSlide = ({carouselPosition, carouselText, carouselIMG, handleMouseEnter, handleMouseLeave}) => {
    return (
        <StyledcarouselSlide className='carousel-container'>
            <StyledCarouselComponent>
                <StyledCarouselText className='desktop-text' src={carouselText} alt="carousel text"/>
                <StyledIMGContainer className='desktop-image'>
                    <StyledCarouselIMG position={carouselPosition} src={carouselIMG} alt="carousel image"/>
                </StyledIMGContainer>  
            </StyledCarouselComponent>
            <SyledCarouselButtonContainer className='carousel-buttons'>
                <StyledButton className={`desktop-button ${carouselPosition === 1 ? 'active' : ''}`} active={`${carouselPosition === 1 ? 'true' : ''}`}></StyledButton>
                <StyledButton className={`desktop-button ${carouselPosition === 2 ? 'active' : ''}`} active={`${carouselPosition === 2 ? 'true' : ''}`}></StyledButton>
                <StyledButton className={`desktop-button ${carouselPosition === 3 ? 'active' : ''}`} active={`${carouselPosition === 3 ? 'true' : ''}`}></StyledButton>
            </SyledCarouselButtonContainer>
        </StyledcarouselSlide>
    );
};

export default CarouselSlide;