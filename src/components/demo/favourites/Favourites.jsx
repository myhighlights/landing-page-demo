import React from 'react';
import styled from 'styled-components';
import '../../../styles/demo.css'
import Chip from './Chip';
import spartaIMG from '../../../assets/demo/favourites/sparta.png';
import olatunjiIMG from '../../../assets/demo/favourites/OLATUNJI.png';
import leagueIMG from '../../../assets/demo/favourites/league.png';
import messiIMG from '../../../assets/demo/favourites/messi.png';
import elhIMG from '../../../assets/demo/favourites/elh.png';
import interMiamiIMG from '../../../assets/demo/favourites/interMiami.png';
import Separator from '../commons/Separator';
import FilterButton from './FilterButton';

const StyledFavouritesContainer = styled.div`
    margin-top: 3rem;
`;

const StyledSubtitle = styled.p`
    font-family: Onest;
    font-size: 14px;
    font-weight: 500;
    line-height: 21.67px;
    text-align: left;
`;

const StyledContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledFiltersContainer = styled.div`
    width: 83%;    
    position: relative;
    margin-right: .5rem;
`;

const StyledChips = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-right: 20px;
`;

const Favourites = () => {

    return (
        <StyledFavouritesContainer>
            <StyledSubtitle>Your favourites</StyledSubtitle>
            <StyledContentContainer>
                <StyledFiltersContainer className='gradient'>
                    <StyledChips className='hideScrollbar'>
                        <Chip image={spartaIMG} text={'SPARTA'}  />
                        <Chip image={olatunjiIMG} text={'V. OLATUNJI'}  />
                        <Chip image={leagueIMG} text={'FORTUNA:LIGA'}  />
                        <Chip image={elhIMG} text={'TIPSPORT EXTRALIGA'}  />
                        <Chip image={messiIMG} text={'L. MESSI'}  />
                        <Chip image={interMiamiIMG} text={'INTER MIAMI'}  />
                    </StyledChips>
                </StyledFiltersContainer>
                <Separator />
                <FilterButton />
            </StyledContentContainer>
        </StyledFavouritesContainer>
    );
};

export default Favourites;