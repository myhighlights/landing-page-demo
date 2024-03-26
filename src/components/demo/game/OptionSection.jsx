import React from "react";
import styled from "styled-components";
import SingleOption from "./SingleOption";
import posterDEMO from "../../../assets/demo/game/facr.png";
import goalIcon from '../../../assets/demo/game/goalIcon.png';

const SelectedGameOptionContainer = styled.div`
  height: 60%;
  border: 1px solid red;
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

const OptionSection = () => {
  return (
    <SelectedGameOptionContainer className="hideScrollBar">
      <StyledLabel>Goals</StyledLabel>
      <SingleOption
        thumbnail={"https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/corners_14_Mlad%C3%A1_Boleslav.mp4"}
        poster={posterDEMO}
        actionIcon={goalIcon}
        actionName={"Goal"}
        actionTime={`7' Minute`}
        teamLogo={""}
        teamName={"CEB"}
        playerLogo={""}
        playerName={"P. Zíka"}
      />
    </SelectedGameOptionContainer>
  );
};

export default OptionSection;
