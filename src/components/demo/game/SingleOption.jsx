import React, { useState } from "react";
import styled from "styled-components";
import XIcon from "../../../assets/demo/game/XIcon.png";

const StyledSingleOptionContainer = styled.div`
  height: 10rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const StyledFirstGroup = styled.div`
  display: flex;
`;

const StyledVideo = styled.div`
  width: 15rem;
  height: 100%;
  margin-right: 1rem;
`;

const StyledActionContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Onest;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.4px;
  text-align: left;
  color: rgba(255, 255, 255, 0.6);
`;

const StyledIcon = styled.img`
  width: 1rem;
  margin-right: 1rem;
`;

const StyledActionData = styled.div``;

const StyledActionName = styled.div`
  margin-bottom: 0.2rem;
`;

const StyledActionTime = styled.div``;

const StyledSecondGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const StyledPlayerTeamContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Onest;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.4px;
  text-align: left;
  color: rgba(255, 255, 255, 0.6);
`;

const StyledTeamPlayerIMG = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

const StyledTeamPlayerName = styled.div``;

const StyledThirdGroup = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxContainer = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  cursor: pointer;
  margin-right: 0.2rem;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  width: 100%;
  height: 100%;
  border: ${({ checked }) =>
    checked ? "rgba(255, 0, 61, 1)" : "1.4px solid rgba(255, 255, 255, 0.7)"};
  background: ${({ checked }) =>
    checked ? "rgba(255, 0, 61, 1)" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ checked }) => (checked ? "white" : "inherit")};
  cursor: pointer;
`;

const StyledXIcon = styled.span`
  display: ${({ checked }) => (checked ? "block" : "none")};
`;

const SingleOption = ({
  thumbnail,
  poster,
  actionIcon,
  actionName,
  actionTime,
  teamLogo,
  teamName,
  playerLogo,
  playerName,
  onCheckboxChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeCheckboxIcon = () => {
    setIsChecked(!isChecked);
    onCheckboxChange(!isChecked);
  };

  const returnActionIcon = (action, icon) => {
    switch (action) {
      case "Goal":
        return icon;

      case "Yellow Card":
        return icon;

      case "Red Card":
        return icon;

      case "Corner":
        return icon;

      default:
        return "";
    }
  };

  return (
    <StyledSingleOptionContainer>
      <StyledFirstGroup>
        <StyledVideo>
          <video width="100%" height="100%" poster={poster} controls>
            <source src={thumbnail} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </StyledVideo>
        <StyledActionContainer>
          <StyledIcon src={returnActionIcon(actionName, actionIcon)} />
          <StyledActionData>
            <StyledActionName>{actionName}</StyledActionName>
            <StyledActionTime>{actionTime}</StyledActionTime>
          </StyledActionData>
        </StyledActionContainer>
      </StyledFirstGroup>
      <StyledSecondGroup>
        <StyledPlayerTeamContainer>
          <StyledTeamPlayerIMG src={teamLogo} />
          <StyledTeamPlayerName>{teamName}</StyledTeamPlayerName>
        </StyledPlayerTeamContainer>
        <StyledPlayerTeamContainer>
          <StyledTeamPlayerIMG src={playerLogo} />
          <StyledTeamPlayerName>{playerName}</StyledTeamPlayerName>
        </StyledPlayerTeamContainer>
      </StyledSecondGroup>
      <StyledThirdGroup>
        <CheckboxContainer>
          <CheckboxInput
            type="checkbox"
            checked={isChecked}
            onChange={handleChangeCheckboxIcon}
          />
          <CheckboxLabel checked={isChecked} onClick={handleChangeCheckboxIcon}>
            <StyledXIcon checked={isChecked}>
              <img src={XIcon} />
            </StyledXIcon>
          </CheckboxLabel>
        </CheckboxContainer>
      </StyledThirdGroup>
    </StyledSingleOptionContainer>
  );
};

export default SingleOption;
