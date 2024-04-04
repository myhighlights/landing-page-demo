import React from "react";
import styled from "styled-components";
import fkmbLogo from "../../../assets/demo/game/fkmb.png";
import dynamoLogo from "../../../assets/demo/game/dynamo.png";
import BreadCrumb from "../commons/BreadCrumb";

const SelectedGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 35%;
  padding-top: 4rem;
`;

const SelectedGameTitle = styled.h3`
  font-family: Onest;
  font-size: 25px;
  font-weight: 500;
  line-height: 40.8px;
  margin-bottom: 0;
  margin-top: 2rem;
`;

const SelectedGameDataContainer = styled.div`
  display: flex;
  height: 10rem;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  margin-top: -2rem;
  padding-bottom: 1rem;

  > div {
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
  align-items: center;
  font-family: Onest;
  font-size: 13px;
  font-weight: 400;
  line-height: 20.4px;
  color: #9c9c9c;
`;

const StyledResult = styled.div`
  font-family: NBArchitekt;
  font-size: 60px;
  font-weight: 400;
  line-height: 80px;
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

const SelectedGame = () => {
  return (
    <SelectedGameContainer>
      <BreadCrumb pageNumber={2} />
      <SelectedGameTitle>Selected Game</SelectedGameTitle>
      <SelectedGameDataContainer>
        <StyledHomeContainer>
          <StyledTeamName whiteSpace={false}>FK Mladá Boleslav</StyledTeamName>
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
  );
};

export default SelectedGame;
