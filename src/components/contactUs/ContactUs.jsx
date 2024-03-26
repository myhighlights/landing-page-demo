import React from 'react';
import styled from 'styled-components';
import BgImage from '../../assets/contactUs/bgImage.png';
import Text from '../../assets/contactUs/text.png';
import LeftVector from '../../assets/contactUs/leftVector.png';
import RightVector from '../../assets/contactUs/rightVector.png';
import LeftVectorBlack from '../../assets/contactUs/leftVectorBlack.png';
import RightVectorBlack from '../../assets/contactUs/rightVectorBlack.png';

const ContactUsContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 5rem;
`;

const StyledBgImage = styled.img``;

const StyledText = styled.img`
    position: absolute;
    bottom: 18%;
`;

const StyledButton = styled.a`
    position: relative;
    background-color: #FF003D;
    width: 100%;
    width: 350px !important;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: Onest;
    font-size: 18px;
    font-weight: 500;
    line-height: 22.95px;
    letter-spacing: 0.002em;
    text-align: center;
    text-decoration: none;
    clip-path: polygon(0 0, 92% 0, 100% 37%, 100% 100%, 8% 100%, 0 63%);
`;

const StyledLeftVector = styled.img`
    position: absolute;
    top: 10px;
    left: 10px;
`;

const StyledRightVector = styled.img`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

const ContactUs = () => {
    const emailAddress = 'info@myhighlights.eu';
    const subject = 'MyHighlight Inquiry';
    const body = 'I would like to know more about MyHighlights and discuss a potential partnership. Can I know more about ...';
  
    // Function to generate the mailto link
    const generateMailtoLink = () => {
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      return `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
    };

    return (
        <ContactUsContainer id='contactUs' className='contactUs-desktop'>
            <StyledBgImage src={BgImage} />
            <StyledText src={Text} />
            <StyledButton className='contactButton' href={generateMailtoLink()}>
                <StyledLeftVector className='whiteVector' src={LeftVector} />
                <StyledLeftVector  className='blackVector' src={LeftVectorBlack} />
                Contact Us
                <StyledRightVector className='whiteVector' src={RightVector} />
                <StyledRightVector className='blackVector' src={RightVectorBlack} />
            </StyledButton>
        </ContactUsContainer>
    );
};

export default ContactUs;