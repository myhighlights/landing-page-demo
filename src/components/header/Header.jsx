import React from 'react';
import styled from 'styled-components';
import '../../styles/header.css';
import logo from '../../assets/logo.png';
import Navbar from './Navbar';

const StyledHeader = styled.div`
    z-index: 2;
    background-color: black;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 0;
    position: fixed;
`;

const StyledLogo = styled.img`
    max-width: 150px;
    max-height: 40px;

    @media screen and (max-width: 768px) {
        max-width: 75px;
        max-height: 20px;
    }
`;

const Header = () => {

    return (
        <StyledHeader className='header-desktop'>
            <div>
                <StyledLogo className='header-logo' src={logo} alt='logo' />
            </div>
            <Navbar/>
        </StyledHeader>
    );
};

export default Header;