import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import video from '../../assets/showCase/Myhighlight-video.mp4';

const StyledVideoContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 20%;
  left: 0;
`;

const StyledVideo = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid #3C3C3C;
  border-radius: 24px;
  object-fit: contain;
`;

const ControlsContainer = styled.div`
  position: absolute;
  background: none !important;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  border: 0 !important;
`;

const PlayPauseButton = styled.button`
  cursor: pointer;
  background: none !important;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0 !important;
`;

const StyledPlayPauseIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 20px; 
    background-color: #FF003D;
`;

const VideoContainer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    
    const handlePlay = () => {
        if (!isPlaying) {
          videoRef.current.play();
          
        }

        setIsPlaying(!isPlaying);
      };

      return (
        <StyledVideoContainer className='videoContainer-desktop'>
          <StyledVideo
            ref={videoRef}
            src={video}
            controls={isPlaying}
          >
            Your browser does not support the video element.
          </StyledVideo>
          {
            !isPlaying && 
               <ControlsContainer onClick={handlePlay}>
                  <PlayPauseButton>
                    {
                      !isPlaying && (
                        <StyledPlayPauseIcon>
                          <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="c-PJLV"><path d="M16 8 4 14.9282V1.0718L16 8Z" fill="black"></path></svg>
                        </StyledPlayPauseIcon>
                      )
                    }
                  </PlayPauseButton>
                </ControlsContainer>
          }
         
        </StyledVideoContainer>
      );
    }
  
export default VideoContainer;