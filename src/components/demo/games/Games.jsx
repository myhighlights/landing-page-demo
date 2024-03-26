import React from 'react';
import styled from 'styled-components';
import '../../../styles/demo.css'
import GameChipComponent from './GameChip';
import liverpoolIMG from '../../../assets/demo/games/liverpool.png';
import spartaIMG from '../../../assets/demo/games/sparta.png';
import cebIMG from '../../../assets/demo/games/ceb.png';
import hkrIMG from '../../../assets/demo/games/hkr.png';
import plzIMG from '../../../assets/demo/games/plz.png';
import slaIMG from '../../../assets/demo/games/sla.png';
import fcsIMG from '../../../assets/demo/games/fcs.png';
import galIMG from '../../../assets/demo/games/gal.png';
import libIMG from '../../../assets/demo/games/lib.png';

const StyledGamesContainer = styled.div`
    margin-top: 4rem;
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
    display: flex;
    height: 32rem;
    flex-direction: column; 
    justify-content: start;
`;

const StyledSeparator = styled.span`
    border-right: ${({ position, arraySize }) => ((position !== arraySize-1) ? '2px solid #2C2C2C' : '')};
    height: 21rem;
    margin-top: 6rem;
`;

const Games = () => {
    const matches = [
        [ 
            {
                date: 'Sun - March, 31',
                competition: 'Fortuna:Liga',  
                homeIMG: cebIMG,
                homeName: 'CEB',
                awayIMG: spartaIMG,
                awayName: 'ACS',
                homeGoals: '-',
                awayGoals :'-'
            },
            {
                date: 'Sun - March, 17',
                competition: 'Fortuna:Liga',  
                homeIMG: spartaIMG,
                homeName: 'ACS',
                awayIMG: hkrIMG,
                awayName: 'HKR',
                homeGoals: '2',
                awayGoals :'1'
            },
            {
                date: 'Thur - March, 14',
                competition: 'Europa League',  
                homeIMG: liverpoolIMG,
                homeName: 'LIV',
                awayIMG: spartaIMG,
                awayName: 'ACS',
                homeGoals: '6',
                awayGoals :'1'
            }
        ],
        [
            {
                date: 'Thur - March, 10',
                competition: 'Fortuna:Liga',  
                homeIMG: plzIMG,
                homeName: 'PLZ',
                awayIMG: spartaIMG,
                awayName: 'ACS',
                homeGoals: '4',
                awayGoals :'0'
            },
            {
                date: 'Thur - March, 07',
                competition: 'Europa League',  
                homeIMG: spartaIMG,
                homeName: 'ACS',
                awayIMG: liverpoolIMG,
                awayName: 'LIV',
                homeGoals: '1',
                awayGoals :'5'
            },
            {
                date: 'Thur - March, 03',
                competition: 'Fortuna:Liga',  
                homeIMG: spartaIMG,
                homeName: 'ACS',
                awayIMG: slaIMG,
                awayName: 'SLA',
                homeGoals: '0',
                awayGoals :'0'
            }
        ],
        [
            {
                date: 'Wed - Feb, 28',
                competition: 'MOL Cup',  
                homeIMG: slaIMG,
                homeName: 'SLA',
                awayIMG: spartaIMG,
                awayName: 'ACS',
                homeGoals: '2',
                awayGoals :'3'
            },
            {
                date: 'Sun - Feb, 25',
                competition: 'Fortuna:Liga',  
                homeIMG: fcsIMG,
                homeName: 'FCS',
                awayIMG: spartaIMG,
                awayName: 'ACS',
                homeGoals: '1',
                awayGoals :'3'
            },
            {
                date: 'Thu - Feb, 22',
                competition: 'Europa League',  
                homeIMG: spartaIMG,
                homeName: 'ACS',
                awayIMG: galIMG,
                awayName: 'GAL',
                homeGoals: '4',
                awayGoals :'1'
            }
        ],
        [
            {
                date: 'Sun - Feb, 18',
                competition: 'Fortuna:Liga',  
                homeIMG: spartaIMG,
                homeName: 'ACS',
                awayIMG: libIMG,
                awayName: 'LIB',
                homeGoals: '2',
                awayGoals :'1'
            }
        ]
    ];

    return (
        <StyledGamesContainer>
            <StyledSubtitle>Games</StyledSubtitle>
            <StyledChipsContainer className='gradient'>
                <StyledOverflowGames className='hideScrollbar'>
                    {matches.map((row, index) => (
                        <>
                            <StyledColumn>
                                {row.map(game => (
                                    <GameChipComponent
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