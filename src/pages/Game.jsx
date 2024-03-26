import React from "react";
import styled from "styled-components";
import LeftVector from "../assets/demo/game/leftVector.png";
import LeftVectorBlack from "../assets/demo/game/leftVectorBlack.png";
import RightVector from "../assets/demo/game/rightVector.png";
import RightVectorBlack from "../assets/demo/game/rightVectorBlack.png";
import fkmbLogo from "../assets/demo/game/fkmb.png";
import dynamoLogo from "../assets/demo/game/dynamo.png";

const StyledGamePageContainer = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SelectedGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
`;

const SelectedGameTitle = styled.h3`
  font-family: Onest;
  font-size: 25px;
  font-weight: 500;
  line-height: 40.8px;
  margin-bottom: 1rem;
`;

const SelectedGameDataContainer = styled.div`
  display: flex;
  height: 10rem;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);

  > div {
    margin-left: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15.5rem;
    height: 100%;
    padding: 0;
  }
`;

const StyledHomeContainer = styled.div``;

const StyledResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Onest;
  font-size: 13px;
  font-weight: 400;
  line-height: 20.4px;
  text-align: left;
  color: #9c9c9c;
`;

const StyledResult = styled.div`
  font-family: NBArchitekt;
  font-size: 60px;
  font-weight: 400;
  line-height: 80px;
  text-align: center;
  color: white;
`;

const StyledAwayContainer = styled.div``;

const StyledTeamName = styled.span`
  font-family: Onest;
  font-size: 15px;
  font-weight: 400;
  line-height: 30.6px;
  letter-spacing: 0.5px;
  white-space: ${({ whiteSpace }) => (!whiteSpace ? "nowrap" : "")};
  margin: 0 1rem;
`;

const StyledTeamLogo = styled.img`
  width: 5rem;
`;

const SelectedGameOptionContainer = styled.div`
  height: 60%;
`;

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
  background-color: #ff003d;
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
      <SelectedGameContainer>
        <SelectedGameTitle>Selected Game</SelectedGameTitle>
        <SelectedGameDataContainer>
          <StyledHomeContainer>
            <StyledTeamName whiteSpace={false}>
              FK Mladá Boleslav
            </StyledTeamName>
            <StyledTeamLogo src={fkmbLogo} />
          </StyledHomeContainer>
          <StyledResultContainer>
            <div>Saturday - March, 3</div>
            <StyledResult>3:1</StyledResult>
            <div>Fortuna:Liga</div>
          </StyledResultContainer>
          <StyledAwayContainer>
            <StyledTeamLogo src={dynamoLogo} />
            <StyledTeamName whiteSpace={true}>
              SK Dynamo České Budějovice
            </StyledTeamName>
          </StyledAwayContainer>
        </SelectedGameDataContainer>
      </SelectedGameContainer>
      <SelectedGameOptionContainer></SelectedGameOptionContainer>
      <SelectedGameButtonContainer>
        <StyledButton className="generateButton" href="/demo/games/1234/game/1">
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
