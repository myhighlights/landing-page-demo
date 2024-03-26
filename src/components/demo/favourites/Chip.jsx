import React from 'react';
import styled from 'styled-components';
import '../../../styles/demo.css'

const StyledChipContainer = styled.div`
    margin-right: 1rem;
    display: flex; 
    align-items: center;
    justify-content: space-around;
    padding: 1rem 1.5rem;
    font-family: Onest;
    font-size: 15px;
    font-weight: 500;
    line-height: 20.4px;
    letter-spacing: 1px;
    text-align: center;
    background-color: #141414;
    border-radius: 8px;
    white-space: nowrap; 
`;

const StyledImage = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 1rem;
`;

const Chip = ({image, text}) => {

    return (
        <StyledChipContainer>
            <StyledImage className='rounded-img' src={image} />
            {text}
        </StyledChipContainer>
    );
};

export default Chip;