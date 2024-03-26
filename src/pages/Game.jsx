import React from 'react';
import styled from 'styled-components';

const StyledGamePageContainer = styled.div`
    height: 90vh;
    display: flex; 
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`;

const SelectedGameContainer = styled.div ``;

const Game = () => {
    return (
        <StyledGamePageContainer>
            <SelectedGameContainer>

            </SelectedGameContainer>
        </StyledGamePageContainer>
    );
};

export default Game;