import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BlurImage from "../../../assets/demo/highlightVideo/Blur.png";
import CrossIcon from "../../../assets/demo/highlightVideo/CrossIcon.png";
import ExportIcon from "../../../assets/demo/highlightVideo/ExportIcon.svg";
import ShareIcon from "../../../assets/demo/highlightVideo/ShareIcon.svg";
import ExportIconWhite from "../../../assets/demo/highlightVideo/ExportIconWhite.svg";
import ShareIconWhite from "../../../assets/demo/highlightVideo/ShareIconWhite.svg";
import SelectionDropdown from "./SelectionDropdown";
import videoPoster from "../../../assets/demo/game/facr.png";

const StyledHighlightContainer = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBlurContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledBlur = styled.img`
  width: 110%;
  height: 110%;
`;

const StyledVideoContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledMatchInfoContainer = styled.div`
  width: 100%;
  height: 5rem;
  padding-bottom: 1rem;
`;

const StyledMatchText = styled.p`
  font-family: Onest;
  font-size: 17px;
  font-weight: 500;
  line-height: 21.67px;
  text-align: left;
  color: #9c9c9c;
  margin: 0;
`;

const StyledMatchInfo = styled.h3`
  font-family: Onest;
  font-size: 32px;
  font-weight: 500;
  line-height: 40.8px;
  text-align: left;
  color: white;
  margin-top: 0.5rem;
`;

const StyledMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 85%;
`;

const StyledCrossIcon = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const StyledVideo = styled.div`
  width: 80%;
  background-color: #3c3c3c;
`;

const StyledFormatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledOptionsText = styled.span`
  font-family: Onest;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.4px;
  text-align: left;
  color: white;
`;

const StyledOptionsButton = styled.div`
  width: 4rem;
  height: 1rem;
  top: 833px;
  left: 1381px;
  padding: 14px 71px 14px 14px;
  border: 1.4px 0px 0px 0px;
  border: 1.4px solid rgba(156, 156, 156, 1);
  display: flex;
  align-items: center;
  color: #9c9c9c;
  font-family: Onest;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.4px;
  margin-top: 1rem;
  cursor: pointer;
`;

const StyledOptionsButtonText = styled.span`
  margin-left: 0.5rem;
`;

const StyledOptionsButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const useVideoSelector = () => {
  const { videoParam } = useParams();

  if (videoParam === "1") {
    return "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/MLB_CEB_goals_only.mp4";
  }

  return "https://my-highlights-test.s3.eu-central-1.amazonaws.com/cut_clips/MLB_CEB_goals_fouls.mp4";
};

const HighlightVideo = () => {
  const [exportIconSrc, updateExportIconSrc] = useState(ExportIcon);
  const [shareIconSrc, updateShareIconSrc] = useState(ShareIcon);
  const videoSrc = useVideoSelector();

  return (
    <StyledHighlightContainer>
      <StyledBlurContainer>
        <StyledBlur src={BlurImage} />
      </StyledBlurContainer>
      <StyledVideoContainer>
        <StyledMatchInfoContainer>
          <StyledMatchText>Your Video</StyledMatchText>
          <StyledMatchInfo>MLB - CEB, March 3</StyledMatchInfo>
        </StyledMatchInfoContainer>
        <StyledMediaContainer>
          <StyledCrossIcon src={CrossIcon} />
          <StyledVideo>
            <video width="100%" height="100%" controls poster={videoPoster}>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </StyledVideo>
          <StyledFormatContainer>
            <SelectionDropdown />
            <StyledOptionsContainer>
              <StyledOptionsText>Options</StyledOptionsText>
              <StyledOptionsButton
                className="hover-red"
                onMouseEnter={() => updateExportIconSrc(ExportIconWhite)}
                onMouseLeave={() => updateExportIconSrc(ExportIcon)}
              >
                <StyledOptionsButtonIcon
                  className="options-icon"
                  src={exportIconSrc}
                />
                <StyledOptionsButtonText>Export</StyledOptionsButtonText>
              </StyledOptionsButton>
              <StyledOptionsButton
                className="hover-red"
                onMouseEnter={() => updateShareIconSrc(ShareIconWhite)}
                onMouseLeave={() => updateShareIconSrc(ShareIcon)}
              >
                <StyledOptionsButtonIcon
                  className="options-icon"
                  src={shareIconSrc}
                />
                <StyledOptionsButtonText>Share</StyledOptionsButtonText>
              </StyledOptionsButton>
            </StyledOptionsContainer>
          </StyledFormatContainer>
        </StyledMediaContainer>
      </StyledVideoContainer>
    </StyledHighlightContainer>
  );
};

export default HighlightVideo;
