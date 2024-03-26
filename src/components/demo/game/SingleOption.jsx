import React from "react";
import styled from "styled-components";

const StyledSingleOptionContainer = styled.div`
  border: 1px solid blue;
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
`;

const StyledActionContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Onest;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.4px;
  text-align: left;
  color: rgba(255, 255, 255, 0.6);
`;

const StyledIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
`;

const StyledActionData = styled.div``;

const StyledActionName = styled.div`
  margin-bottom: 0.2rem;
`;

const StyledActionTime = styled.div``;

const StyledSecondGroup = styled.div``;

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
}) => {
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

      </StyledSecondGroup>
    </StyledSingleOptionContainer>
  );
};

export default SingleOption;
