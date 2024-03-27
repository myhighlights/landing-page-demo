import React from 'react';
import styled from 'styled-components';
import '../../../styles/demo.css'

const StyledChipContainer = styled.div`
    width: 25rem;
    margin: 1rem;
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
    color: #9C9C9C;
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
    border-image-source: linear-gradient(266.68deg, #202020 0%, rgba(177, 177, 177, 0.03) 100%);
    border-image-slice: 1;
    border-image-width: 2;
    border-image-outset: 0;
    padding: .5rem 1rem;
    text-decoration: none;
    color: white;
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
    margin-left: ${({ team }) => (team === 'home' ? '.5rem' : '')};
    margin-right: ${({ team }) => (team === 'home' ? '0' : '.5rem')};
    font-weight: ${({ homeGoals, awayGoals, team }) =>
        team === 'home' ? (homeGoals > awayGoals ? 'bolder' : 'lighter') : awayGoals > homeGoals ? 'bolder' : 'lighter'};
`;

const StyledResult = styled.span`
    font-family: NBArchitekt;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
`; 

const GameChip = ({date, competition, homeIMG, homeName, awayIMG, awayName, homeGoals, awayGoals}) => {

    return (
        <StyledChipContainer>
            <StyledMatchDateTime>
                <StyledDateTime>{date}</StyledDateTime>
                <StyledDateTime>{competition}</StyledDateTime>
            </StyledMatchDateTime>
            <StyledMatchContainer href='/demo/games/4'>
                <StyledDataContainer>
                    <StyledTeamImage src={homeIMG} />
                    <StyledTeamName team='home' homeGoals={homeGoals} awayGoals={awayGoals}>{homeName}</StyledTeamName>
                </StyledDataContainer>
                <StyledDataContainer>
                    <StyledResult>{homeGoals}</StyledResult>
                    <StyledResult>:</StyledResult>
                    <StyledResult>{awayGoals}</StyledResult>
                </StyledDataContainer>
                <StyledDataContainer>
                    <StyledTeamName team='away' homeGoals={homeGoals} awayGoals={awayGoals}>{awayName}</StyledTeamName>
                    <StyledTeamImage src={awayIMG} />
                </StyledDataContainer>
            </StyledMatchContainer>
        </StyledChipContainer>
    );
};

export default GameChip;