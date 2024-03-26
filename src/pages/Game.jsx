import React from "react";
import styled from "styled-components";
import LeftVector from "../assets/demo/game/leftVector.png";
import LeftVectorBlack from "../assets/demo/game/leftVectorBlack.png";
import RightVector from "../assets/demo/game/rightVector.png";
import RightVectorBlack from "../assets/demo/game/rightVectorBlack.png";

const StyledGamePageContainer = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid red;
`;

const SelectedGameContainer = styled.div`
  border: 1px solid green;
  height: 30%;
`;

const SelectedGameOptionContainer = styled.div`
  border: 1px solid yellow;
  height: 60%;
`;

const SelectedGameButtonContainer = styled.div`
  border: 1px solid blue;
  height: 10%;
`;

const StyledButton = styled.a`
  position: relative;
  background-color: #ff003d;
  width: 100%;
  width: 350px !important;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Onest;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.95px;
  letter-spacing: 0.002em;
  text-align: center;
  text-decoration: none;
  clip-path: polygon(0 0, 92% 0, 100% 37%, 100% 100%, 8% 100%, 0 63%);
`;

const StyledLeftVector = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const StyledRightVector = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Game = () => {
  return (
    <StyledGamePageContainer>
      <SelectedGameContainer></SelectedGameContainer>
      <SelectedGameOptionContainer></SelectedGameOptionContainer>
      <SelectedGameButtonContainer>
        <StyledButton className="contactButton" href="/demo/games/1234/game/1">
          <StyledLeftVector className="whiteVector" src={LeftVector} />
          <StyledLeftVector className="blackVector" src={LeftVectorBlack} />
          Generate Highlight
          <StyledRightVector className="whiteVector" src={RightVector} />
          <StyledRightVector className="blackVector" src={RightVectorBlack} />
        </StyledButton>
      </SelectedGameButtonContainer>
    </StyledGamePageContainer>
  );
};

export default Game;
