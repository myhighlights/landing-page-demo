import React from "react";
import styled from "styled-components";
import SingleOption from "./SingleOption";
import posterDEMO from "../../../assets/demo/game/facr.png";
import goalIcon from "../../../assets/demo/game/goalIcon.png";
import yellowCardIcon from "../../../assets/demo/game/yellowCardIcon.png";
import cornerIcon from "../../../assets/demo/game/cornerIcon.png";
import dynamoLogo from "../../../assets/demo/game/dynamo.png";
import fkmbLogo from "../../../assets/demo/game/fkmb.png";
import ZikaPlayer from "../../../assets/demo/game/ZikaPlayer.png";
import HelalPlayer from "../../../assets/demo/game/HelalPlayer.png";
import KadlecPlayer from "../../../assets/demo/game/KadlecPlayer.png";
import KusejPlayer from "../../../assets/demo/game/KusejPlayer.png";
import NiklPlayer from "../../../assets/demo/game/NiklPlayer.png";
import SkalákPlayer from "../../../assets/demo/game/SkalákPlayer.png";

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

const OptionSection = ({ onCheckboxChange }) => {
  return (
    <SelectedGameOptionContainer className="hideScrollBar">
      <StyledSection>
        <StyledLabel>Goals</StyledLabel>
        <SingleOption
          onCheckboxChange={onCheckboxChange}
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/goals_0_Petr_Z%C3%ADka_%C4%8Cesk%C3%A9_Bud%C4%9Bjovice.mp4"
          }
          poster={posterDEMO}
          actionIcon={goalIcon}
          actionName={"Goal"}
          actionTime={`7' Minute`}
          teamLogo={dynamoLogo}
          teamName={"CEB"}
          playerLogo={ZikaPlayer}
          playerName={"P. Zíka"}
        />
        <SingleOption
          onCheckboxChange={onCheckboxChange}
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/goals_1_Yusuf_Mlada%CC%81_Boleslav.mp4"
          }
          poster={posterDEMO}
          actionIcon={goalIcon}
          actionName={"Goal"}
          actionTime={`10' Minute`}
          teamLogo={fkmbLogo}
          teamName={"MLB"}
          playerLogo={HelalPlayer}
          playerName={"A. Helal"}
        />
        <SingleOption
          onCheckboxChange={onCheckboxChange}
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/goals_2_Yusuf_Mlad%C3%A1_Boleslav.mp4"
          }
          poster={posterDEMO}
          actionIcon={goalIcon}
          actionName={"Goal"}
          actionTime={`15' Minute`}
          teamLogo={fkmbLogo}
          teamName={"MLB"}
          playerLogo={HelalPlayer}
          playerName={"A. Helal"}
        />
        <SingleOption
          onCheckboxChange={onCheckboxChange}
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/goals_3_Matous_Nikl_Mlad%C3%A1_Boleslav.mp4"
          }
          poster={posterDEMO}
          actionIcon={goalIcon}
          actionName={"Goal"}
          actionTime={`90+1' Minute`}
          teamLogo={fkmbLogo}
          teamName={"MLB"}
          playerLogo={NiklPlayer}
          playerName={"M. Nikl"}
        />
      </StyledSection>
      <StyledSection>
        <StyledLabel>Fouls</StyledLabel>
        <SingleOption
          onCheckboxChange={onCheckboxChange}
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/fouls_0_Jiri_Skalak_%C4%8Cesk%C3%A9_Bud%C4%9Bjovice.mp4"
          }
          poster={posterDEMO}
          actionIcon={yellowCardIcon}
          actionName={"Yellow Card"}
          actionTime={`65' Minute`}
          teamLogo={dynamoLogo}
          teamName={"CEB"}
          playerLogo={SkalákPlayer}
          playerName={"J. Skalák"}
        />
        <SingleOption
          onCheckboxChange={onCheckboxChange}
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/fouls_1_Andrej_Kadlec_Mlad%C3%A1_Boleslav.mp4"
          }
          poster={posterDEMO}
          actionIcon={yellowCardIcon}
          actionName={"Yellow Card"}
          actionTime={`76' Minute`}
          teamLogo={fkmbLogo}
          teamName={"MLB"}
          playerLogo={KadlecPlayer}
          playerName={"A. Kadlec"}
        />
      </StyledSection>
      <StyledSection>
        <StyledLabel>Corner Kicks</StyledLabel>
        <SingleOption
          onCheckboxChange={onCheckboxChange}
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/corners_13_%C4%8Cesk%C3%A9_Bud%C4%9Bjovice.mp4"
          }
          poster={posterDEMO}
          actionIcon={cornerIcon}
          actionName={"Corner"}
          actionTime={`25' Minute`}
          teamLogo={fkmbLogo}
          teamName={"MLB"}
          playerLogo={KusejPlayer}
          playerName={"V. Kušej"}
        />
        <SingleOption
          onCheckboxChange={onCheckboxChange}
          thumbnail={
            "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/corners_14_Mlad%C3%A1_Boleslav.mp4"
          }
          poster={posterDEMO}
          actionIcon={cornerIcon}
          actionName={"Corner"}
          actionTime={`70' Minute`}
          teamLogo={dynamoLogo}
          teamName={"CEB"}
          playerLogo={KusejPlayer}
          playerName={"V. Kušej"}
        />
      </StyledSection>
    </SelectedGameOptionContainer>
  );
};

export default OptionSection;
