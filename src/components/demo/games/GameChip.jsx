import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../../../styles/demo.css";

const StyledChipContainer = styled.div`
  width: 25rem;
  margin: 0.5rem 1rem;
  margin-left: ${({ columnNumber }) => columnNumber === 0 && "0"};
`;

const StyledMatchDateTime = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Onest;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.4px;
  text-align: left;
  color: #9c9c9c;
`;

const StyledDateTime = styled.p`
  margin: 0 !important;
`;

const StyledMatchContainer = styled.a`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #141414;
  margin-top: 1rem;
  border: 1px solid;
  border-image-source: linear-gradient(
    266.68deg,
    #202020 0%,
    rgba(177, 177, 177, 0.03) 100%
  );
  border-image-slice: 1;
  border-image-width: 2;
  border-image-outset: 0;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: white;
  position: relative;
`;

const StyledCountDownContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: -1rem;
  background-color: rgba(0, 0, 0, 0.95);
  display: ${({ isHidden }) => (isHidden ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(156, 156, 156, 1);
  font-family: Onest;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.85px;
  letter-spacing: 0.5px;
`;

const StyledCountDownText = styled.p`
  margin: 0;
`;

const StyledContDown = styled.p`
  color: rgba(255, 255, 255, 1);
  margin: 0;
  margin-top: 0.5rem;
  font-family: NBArchitekt;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

const StyledDataContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTeamImage = styled.img`
  width: 45px;
  height: 45px;
`;

const StyledTeamName = styled.p`
  font-family: Onest;
  font-size: 17px;
  font-weight: 400;
  line-height: 21.67px;
  letter-spacing: 0.5px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-left: ${({ team }) => (team === "home" ? ".5rem" : "")};
  margin-right: ${({ team }) => (team === "home" ? "0" : ".5rem")};
  font-weight: ${({ homeGoals, awayGoals, team }) =>
    team === "home"
      ? homeGoals > awayGoals
        ? "bolder"
        : "lighter"
      : awayGoals > homeGoals
      ? "bolder"
      : "lighter"};
`;

const StyledResult = styled.span`
  font-family: NBArchitekt;
  font-size: 40px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
`;

const GameChip = ({
  date,
  competition,
  homeIMG,
  homeName,
  awayIMG,
  awayName,
  homeGoals,
  awayGoals,
  columnNumber,
  matchHidden,
}) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const calculateTimeLeft = () => {
    const deadline = new Date("April 7, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const difference = deadline - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");
    const hours = String(
      Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(
      Math.floor((difference % (1000 * 60)) / 1000)
    ).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const showTimeLeft = () => {
    if (Object.keys(timeLeft).length) {
      return `${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`;
    }
  };

  return (
    <StyledChipContainer columnNumber={columnNumber}>
      <StyledMatchDateTime>
        <StyledDateTime>{date}</StyledDateTime>
        <StyledDateTime>{competition}</StyledDateTime>
      </StyledMatchDateTime>
      <StyledMatchContainer href="/demo/games/4">
        <StyledCountDownContainer isHidden={matchHidden}>
          <StyledCountDownText>This game will be available</StyledCountDownText>
          <StyledContDown>{showTimeLeft()}</StyledContDown>
        </StyledCountDownContainer>
        <StyledDataContainer>
          <StyledTeamImage src={homeIMG} />
          <StyledTeamName
            team="home"
            homeGoals={homeGoals}
            awayGoals={awayGoals}
          >
            {homeName}
          </StyledTeamName>
        </StyledDataContainer>
        <StyledDataContainer>
          <StyledResult>{homeGoals}</StyledResult>
          <StyledResult>:</StyledResult>
          <StyledResult>{awayGoals}</StyledResult>
        </StyledDataContainer>
        <StyledDataContainer>
          <StyledTeamName
            team="away"
            homeGoals={homeGoals}
            awayGoals={awayGoals}
          >
            {awayName}
          </StyledTeamName>
          <StyledTeamImage src={awayIMG} />
        </StyledDataContainer>
      </StyledMatchContainer>
    </StyledChipContainer>
  );
};

export default GameChip;
