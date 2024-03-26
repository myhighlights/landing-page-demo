import React, { useState } from 'react';
import styled from 'styled-components';
import '../../styles/navBar.css';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavbarToggle = styled.div`
  position: relative;
  cursor: pointer;
  padding: 10px;
  position: fixed;
  right: .3rem;
  top: .7rem;
  z-index: 1;

  &:hover {
    .bar{
        background-color: #ff003d;
    }
  }

  .bar {
    display: block;
    width: 25px;
    height: 2px;
    background-color: #fff;
    margin: 7px 0;
    transition: 0.4s;
  }

  &.active .bar:nth-child(1) {
    transform: rotate(-50deg) translate(-6px, 5px);
  }

  &.active .bar:nth-child(2) {
    opacity: 0;
  }

  &.active .bar:nth-child(3) {
    transform: rotate(50deg) translate(-8px, -6px);
  }

`;

const MainNav = styled.ul`
  display: ${({ isopen }) => (isopen ? 'block' : 'none')};
  list-style: none;
  position: fixed;
  top: 0;
  width: 50vw;
  height: 100vh;
  margin-top: 5rem;
  right: ${({ isopen }) => (isopen ? '0' : '-50vw')};
  background-color: black;
  transition: opacity 0.4s ease-in-out;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <Nav className='navbar-mobile'>
            <NavbarToggle className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </NavbarToggle>
            <MainNav isopen={isOpen ? isOpen.toString() : undefined}>
                <li><a href="home" className="nav-links">Home</a></li>
                <li><a href="#carouselSection" className="nav-links">About Us</a></li>
                <li><a href="#showCase" className="nav-links">Showcase</a></li>
                <li><a href="#technology" className="nav-links">Techonology</a></li>
                <li><a href="#contactUs" className="nav-links">Investment</a></li>
                <li><a href="#contactUs" className="nav-links">Contact Us</a></li>
            </MainNav>
        </Nav>
        <nav className="navbar-desktop">
            <a href="home" className="nav-links">Home</a>
            <a href="#carouselSection" className="nav-links">About Us</a>
            <a href="#showCase" className="nav-links">Showcase</a>
            <a href="#technology" className="nav-links">Techonology</a>
            <a href="#contactUs" className="nav-links">Investment</a>
            <a href="#contactUs" className="nav-links">Contact Us</a>
        </nav>
    </>
  );
};

export default Navbar;