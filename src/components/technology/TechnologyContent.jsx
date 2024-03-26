import React from 'react';
import styled from 'styled-components';
import leftArrow from '../../assets/technology/Left-Arrow.png';
import rightArrow from '../../assets/technology/Right-Arrow.png';

const TechnologyContainer = styled.div`
    border: 1px solid ${({borderColor}) => borderColor};
    width: 10rem;
    height: 6rem;
    font-family: Onest;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
    position: relative;
    color: ${({color}) => color};
    text-align: center;
    padding: .4rem;
`;

const StyledLeftArrow = styled.img`
    position: absolute;
    margin-top: 10rem;
    margin-left: -15rem;
`;

const StyledLeftArrowMobile = styled.img`
    display: none;
`;

const StyledRightArrowMobile = styled.img`
display: none;
`;

const StyledRightArrow = styled.img`
    position: absolute;
    margin-top: 10rem;
    margin-left: 15rem;
`;

const StyledText = styled.span`
    padding: .5rem;
`;

const TechnologyContent = ({number, color, borderColor, text}) => {
    return (
        <>
            {number % 2 !== 0 && number !== 5 &&  <StyledLeftArrowMobile className='tech-left-arrow-desktop' src={leftArrow} />}
            {number % 2 !== 0 && number !== 5 &&  <StyledLeftArrowMobile className='tech-left-arrow-desktop2' src={leftArrow} />}
            <TechnologyContainer color={color} borderColor={borderColor} id='technology' className='technologyContent-desktop'>
                {
                    number % 2 !== 0 && number !== 5 && (
                        <>
                            <StyledLeftArrow className='tech-arrow-mobile' src={leftArrow} />
                        </>
                    )
                }
                <StyledText>{text}</StyledText>
                {
                    number % 2 === 0 && (
                        <>
                            <StyledRightArrow className='tech-arrow-mobile' src={rightArrow} />
                        </>
                    )
                }
            </TechnologyContainer>
            {number % 2 !== 0 && number !== 5 && <StyledRightArrowMobile className='tech-right-arrow-desktop' src={rightArrow} />}
            {number % 2 !== 0 && number !== 5 && <StyledRightArrowMobile className='tech-right-arrow-desktop2' src={rightArrow} />}
        </>
    );
};

export default TechnologyContent;