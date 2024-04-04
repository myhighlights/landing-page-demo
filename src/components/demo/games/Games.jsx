import React from "react";
import styled from "styled-components";
import "../../../styles/demo.css";
import GameChipComponent from "./GameChip";
import liverpoolIMG from "../../../assets/demo/games/liverpool.png";
import spartaIMG from "../../../assets/demo/games/sparta.png";
import cebIMG from "../../../assets/demo/games/ceb.png";
import plzIMG from "../../../assets/demo/games/plz.png";
import slaIMG from "../../../assets/demo/games/sla.png";
import libIMG from "../../../assets/demo/games/lib.png";
import bohIMG from "../../../assets/demo/games/boh.png";
import karIMG from "../../../assets/demo/games/kar.png";
import kvaIMG from "../../../assets/demo/games/kva.png";
import livIMG from "../../../assets/demo/games/liv.png";
import mblIMG from "../../../assets/demo/games/mbl.png";
import mlbIMG from "../../../assets/demo/games/mlb.png";
import pceIMG from "../../../assets/demo/games/pce.png";
import sigIMG from "../../../assets/demo/games/sig.png";
import spaIMG from "../../../assets/demo/games/spa.png";

const StyledGamesContainer = styled.div`
  margin-top: 1rem;
`;

const StyledSubtitle = styled.h1`
  font-family: Onest;
  font-size: 32px;
  font-weight: 500;
  line-height: 40.8px;
  text-align: left;
`;

const StyledChipsContainer = styled.div`
  height: 32rem;
  margin-top: -1rem;
`;

const StyledOverflowGames = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: scroll;
`;

const StyledColumn = styled.div`
  padding: 0 3rem;
  padding-left: ${({ columnNumber }) => columnNumber === 0 && "0"};
  display: flex;
  height: 32rem;
  flex-direction: column;
  justify-content: start;
`;

const StyledSeparator = styled.span`
  border-right: ${({ position, arraySize }) =>
    position !== arraySize - 1 ? "2px solid #2C2C2C" : ""};
  height: 21rem;
  margin-top: 4rem;
`;

const Games = () => {
  const matches = [
    [
      {
        date: "Sun - March, 14",
        competition: "Europa League",
        homeIMG: liverpoolIMG,
        homeName: "LIV",
        awayIMG: spartaIMG,
        awayName: "ACS",
        homeGoals: "6",
        awayGoals: "1",
        matchHidden: true,
      },
      {
        date: "Sun - March, 10",
        competition: "Fortuna:Liga",
        homeIMG: plzIMG,
        homeName: "PLZ",
        awayIMG: spartaIMG,
        awayName: "ACS",
        homeGoals: "4",
        awayGoals: "0",
        matchHidden: false,
      },
      {
        date: "Sat - March, 09",
        competition: "Fortuna:Liga",
        homeIMG: libIMG,
        homeName: "LIB",
        awayIMG: karIMG,
        awayName: "KAR",
        homeGoals: "1",
        awayGoals: "0",
        matchHidden: false,
      },
    ],
    [
      {
        date: "Sat - March, 03",
        competition: "Fortuna:Liga",
        homeIMG: mlbIMG,
        homeName: "MLB",
        awayIMG: cebIMG,
        awayName: "CEB",
        homeGoals: "3",
        awayGoals: "1",
        matchHidden: false,
      },
      {
        date: "Sun - March, 03",
        competition: "Fortuna:Liga",
        homeIMG: spartaIMG,
        homeName: "ACS",
        awayIMG: slaIMG,
        awayName: "SLA",
        homeGoals: "0",
        awayGoals: "0",
        matchHidden: false,
      },
      {
        date: "Sun - March, 03",
        competition: "Tipsport Extraliga",
        homeIMG: mblIMG,
        homeName: "MBL",
        awayIMG: spaIMG,
        awayName: "SPA",
        homeGoals: "1",
        awayGoals: "2",
        matchHidden: false,
      },
    ],
    [
      {
        date: "Sat - March, 02",
        competition: "Fortuna:Liga",
        homeIMG: sigIMG,
        homeName: "SIG",
        awayIMG: bohIMG,
        awayName: "BOH",
        homeGoals: "3",
        awayGoals: "1",
        matchHidden: false,
      },
      {
        date: "Fri - March, 01",
        competition: "Tipsport Extraliga",
        homeIMG: kvaIMG,
        homeName: "KVA",
        awayIMG: spaIMG,
        awayName: "SPA",
        homeGoals: "4",
        awayGoals: "0",
        matchHidden: false,
      },
      {
        date: "Sun - February, 25",
        competition: "Fortuna:Liga",
        homeIMG: livIMG,
        homeName: "LIV",
        awayIMG: spartaIMG,
        awayName: "ACS",
        homeGoals: "1",
        awayGoals: "3",
        matchHidden: false,
      },
    ],
    [
      {
        date: "Sun - February, 25",
        competition: "Fortuna:Liga",
        homeIMG: slaIMG,
        homeName: "SLA",
        awayIMG: pceIMG,
        awayName: "PCE",
        homeGoals: "3",
        awayGoals: "0",
        matchHidden: false,
      },
    ],
  ];

  return (
    <StyledGamesContainer>
      <StyledSubtitle>Games</StyledSubtitle>
      <StyledChipsContainer className="gradientGames">
        <StyledOverflowGames className="hideScrollbar">
          {matches.map((row, index) => (
            <>
              <StyledColumn columnNumber={index}>
                {row.map((game) => (
                  <GameChipComponent
                    columnNumber={index}
                    matchHidden={game.matchHidden}
                    date={game.date}
                    competition={game.competition}
                    homeIMG={game.homeIMG}
                    homeName={game.homeName}
                    awayIMG={game.awayIMG}
                    awayName={game.awayName}
                    homeGoals={game.homeGoals}
                    awayGoals={game.awayGoals}
                  />
                ))}
              </StyledColumn>
              <StyledSeparator position={index} arraySize={matches.length} />
            </>
          ))}
        </StyledOverflowGames>
      </StyledChipsContainer>
    </StyledGamesContainer>
  );
};

export default Games;
