import React from "react";
import styled from "styled-components";
import LeftVector from "../../../assets/demo/game/leftVector.png";
import LeftVectorBlack from "../../../assets/demo/game/leftVectorBlack.png";
import RightVector from "../../../assets/demo/game/rightVector.png";
import RightVectorBlack from "../../../assets/demo/game/rightVectorBlack.png";

const SelectedGameButtonContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 1rem 0;
  padding-bottom: 0;
`;

const StyledButton = styled.a`
  position: relative;
  background-color: ${({ isButtonEnabled }) =>
    isButtonEnabled ? "#ff003d" : "#CCCCCC"};
  width: 20rem !important;
  height: 3.5rem;
  padding: 0.3rem;
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
  cursor: ${({ isButtonEnabled }) =>
    isButtonEnabled ? "pointer" : "default"} !important;

  &:hover {
    background-color: ${({ isButtonEnabled }) =>
      isButtonEnabled && "#FF2458"} !important;
  }

  &:active {
    color: ${({ isButtonEnabled }) => isButtonEnabled && "black"} !important;
    background-color: ${({ isButtonEnabled }) =>
      isButtonEnabled && "#FF7979"} !important;
  }

  &:active .whiteVector {
    display: ${({ isButtonEnabled }) => isButtonEnabled && "none"} !important;
  }

  &:active .blackVector {
    display: ${({ isButtonEnabled }) => isButtonEnabled && "block"} !important;
  }
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

const ButtonSection = ({ isButtonEnabled }) => {
  return (
    <SelectedGameButtonContainer>
      <StyledButton
        isButtonEnabled={isButtonEnabled}
        className="generateButton"
        href={isButtonEnabled && "/demo/games/1234/game/1"}
      >
        <StyledLeftVector className="whiteVector" src={LeftVector} />
        <StyledLeftVector className="blackVector" src={LeftVectorBlack} />
        Generate Highlight
        <StyledRightVector className="whiteVector" src={RightVector} />
        <StyledRightVector className="blackVector" src={RightVectorBlack} />
      </StyledButton>
    </SelectedGameButtonContainer>
  );
};

export default ButtonSection;
