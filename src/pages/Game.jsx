import React from 'react';
import styled from 'styled-components';

const StyledGamePageContainer = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    border: 1px solid red;
`;

const SelectedGameContainer = styled.div `
    border: 1px solid green;
    height: 30%;
`;

const SelectedGameOptionContainer = styled.div `
    border: 1px solid yellow;
    height: 60%;
`;

const SelectedGameButtonContainer = styled.div `
    border: 1px solid blue;
    height: 10%;
`;

const StyledButton = styled.div`
    border: 1px solid red;
`;

const Game = () => {
    return (
        <StyledGamePageContainer>
            <SelectedGameContainer>
            
            </SelectedGameContainer>
            <SelectedGameOptionContainer>
            
            </SelectedGameOptionContainer>
            <SelectedGameButtonContainer>
                
            </SelectedGameButtonContainer>
        </StyledGamePageContainer>
    );
};

export default Game;