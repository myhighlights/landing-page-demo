import React from "react";
import styled from "styled-components";
import SingleOption from "./SingleOption";
import posterDEMO from "../../../assets/demo/game/facr.png";
import goalIcon from "../../../assets/demo/game/goalIcon.png";
import yellowCardIcon from '../../../assets/demo/game/yellowCardIcon.png';
import teamLogo from "../../../assets/demo/game/dynamo.png";
import playerLogo from "../../../assets/demo/game/ZikaPlayer.png";

const SelectedGameOptionContainer = styled.div`
  height: 60%;
  margin-top: 1rem;
  overflow-y: scroll;
`;

const StyledLabel = styled.span`
  font-family: Onest;
  font-size: 18px;
  font-weight: 500;
  line-height: 30.6px;
  text-align: left;
`;

const StyledSection = styled.div`
  padding-top: 2rem;
`;

const OptionSection = () => {
  return (
    <SelectedGameOptionContainer className="hideScrollBar">
      <StyledSection>
        <StyledLabel>Goals</StyledLabel>
        <SingleOption
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/corners_14_Mlad%C3%A1_Boleslav.mp4"
          }
          poster={posterDEMO}
          actionIcon={goalIcon}
          actionName={"Goal"}
          actionTime={`7' Minute`}
          teamLogo={teamLogo}
          teamName={"CEB"}
          playerLogo={playerLogo}
          playerName={"P. Zíka"}
        />
        <SingleOption
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/corners_14_Mlad%C3%A1_Boleslav.mp4"
          }
          poster={posterDEMO}
          actionIcon={goalIcon}
          actionName={"Goal"}
          actionTime={`7' Minute`}
          teamLogo={teamLogo}
          teamName={"CEB"}
          playerLogo={playerLogo}
          playerName={"P. Zíka"}
        />
        <SingleOption
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/corners_14_Mlad%C3%A1_Boleslav.mp4"
          }
          poster={posterDEMO}
          actionIcon={goalIcon}
          actionName={"Goal"}
          actionTime={`7' Minute`}
          teamLogo={teamLogo}
          teamName={"CEB"}
          playerLogo={playerLogo}
          playerName={"P. Zíka"}
        />
        <SingleOption
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/corners_14_Mlad%C3%A1_Boleslav.mp4"
          }
          poster={posterDEMO}
          actionIcon={goalIcon}
          actionName={"Goal"}
          actionTime={`7' Minute`}
          teamLogo={teamLogo}
          teamName={"CEB"}
          playerLogo={playerLogo}
          playerName={"P. Zíka"}
        />
      </StyledSection>
      <StyledSection>
        <StyledLabel>Fouls</StyledLabel>
        <SingleOption
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/corners_14_Mlad%C3%A1_Boleslav.mp4"
          }
          poster={posterDEMO}
          actionIcon={yellowCardIcon}
          actionName={"Yellow Card"}
          actionTime={`7' Minute`}
          teamLogo={teamLogo}
          teamName={"CEB"}
          playerLogo={playerLogo}
          playerName={"P. Zíka"}
        />
      </StyledSection>
    </SelectedGameOptionContainer>
  );
};

export default OptionSection;
