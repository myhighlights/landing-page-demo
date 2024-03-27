import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import '../../../styles/demo.css'
import logo from '../../../assets/logo.png';
import profileImage from '../../../assets/demo/games/sparta.png';
import Separator from '../commons/Separator';

const StyledHeader = styled.div`
    width: 80vw;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    font-family: Onest;
    font-size: 15px;
    font-weight: 500;
    line-height: 21.67px;
    letter-spacing: 1px;
    text-align: left;
`;

const StyledLeftPart = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40rem;
`;

const StyledRigthPart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 13rem;
`;

const StyledElementContainer = styled.div`
    margin .5rem;
    display: flex;
`;

const StyledLogoImg = styled.img`
    width: 8rem;
`;

const StyledSubtitle = styled.a`
    margin: .5rem 1.5rem;
    color: white;
    text-decoration: none;
`;

const StyledProfileImg = styled.img`
    width: 40px;
    height: 40px;
    margin: 0.5rem 1.5rem;
    margin-right: 0;
`;

const Header = () => {

    return (
        <StyledHeader className='header-demo'>
            <StyledLeftPart>
                <StyledElementContainer>
                    <Link to="/demo/games">
                        <StyledLogoImg className='header-logo' src={logo} alt='logo'/>
                    </Link>
                </StyledElementContainer>
                <StyledElementContainer>
                    <StyledSubtitle target='_blank' href='https://sparta.cz/cs/zapasy/kalendar/a-tym/2023-2024'>GAMES</StyledSubtitle>
                    <StyledSubtitle target='_blank' href='https://sparta.cz/cs/tym/a-tym'>TEAMS</StyledSubtitle>
                    <StyledSubtitle target='_blank' href='https://sparta.cz/cs/'>SPORT</StyledSubtitle>
                    <StyledSubtitle target='_blank' href='https://sparta.cz/cs/fanzona/'>COMMUNITY</StyledSubtitle>
                </StyledElementContainer>
            </StyledLeftPart>
            <StyledRigthPart>
                <StyledSubtitle>SEARCH</StyledSubtitle>
                <Separator />
                <StyledProfileImg className='rounded-img' src={profileImage} alt='profile image' />
            </StyledRigthPart>
        </StyledHeader>
    );
};

export default Header;