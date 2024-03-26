import React from 'react';
import styled from 'styled-components';
import '../../../styles/demo.css'
import filterIcon from '../../../assets/demo/favourites/filterIcon.png';

const StyledChipContainer = styled.div`
    margin: .5rem;
    margin-right: 0;
    display: flex; 
    align-items: center;
    justify-content: space-around;
    padding: 1rem 1.5rem;
    font-family: Onest;
    font-size: 15px;
    font-weight: 500;
    line-height: 20.4px;
    letter-spacing: 0.20000000298023224px;
    text-align: center;    
    background-color: #3C3C3C;
    border-radius: 8px;
`;

const StyledIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 1rem;
`;

const FilterButton = ({image}) => {

    return (
        <StyledChipContainer>
            <StyledIcon src={filterIcon} />
            Filter
        </StyledChipContainer>
    );
};

export default FilterButton;