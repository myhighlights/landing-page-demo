import React from 'react';
import styled from 'styled-components';
import TitleText from '../../assets/technology/text.png';
import TechnologyContent from './TechnologyContent';

const TechnologyContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledTechnologyContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    align-items: center;
`;

const Technology = () => {
    return (
        <TechnologyContainer id='technology' className='technology-desktop'>
            <div>
                <img className='technologyText' src={TitleText} alt=""/>
            </div>
            <StyledTechnologyContent className='technologyContent'>
                <TechnologyContent number={1} color={'#FFE0E0'} borderColor={'white'} text={'Video Input'} />
                <TechnologyContent number={2} color={'#FFE0E0'} borderColor={'#FF003D'} text={'ML Model'} />
                <TechnologyContent number={3} color={'#FFE0E0'} borderColor={'#FF003D'} text={'Video Segmentation'} />
                <TechnologyContent number={4} color={'#FFE0E0'} borderColor={'#FF7979'} text={'User Highlight Requests'} />
                <TechnologyContent number={5} color={'#FFE0E0'} borderColor={'#FF7979'} text={'Personalised Highlight'} />
            </StyledTechnologyContent>
        </TechnologyContainer>
    );
};

export default Technology;