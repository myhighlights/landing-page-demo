import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import carouselText1 from '../../assets/carouselSection/slide1/carouselText.png';
import carouselIMG1 from '../../assets/carouselSection/slide1/carouselIMG.png';
import carouselText2 from '../../assets/carouselSection/slide2/carouselText.png';
import carouselIMG2 from '../../assets/carouselSection/slide2/carouselIMG.png';
import carouselText3 from '../../assets/carouselSection/slide3/carouselText.png';
import carouselIMG3 from '../../assets/carouselSection/slide3/carouselIMG.png';
import carouselText_desktop1 from '../../assets/carouselSection/slide1/carouselText_desktop.png';
import carouselIMG_desktop1 from '../../assets/carouselSection/slide1/carouselIMG_desktop.png';
import carouselText_desktop2 from '../../assets/carouselSection/slide2/carouselText_desktop.png';
import carouselIMG_desktop2 from '../../assets/carouselSection/slide2/carouselIMG_desktop.png';
import carouselText_desktop3 from '../../assets/carouselSection/slide3/carouselText_desktop.png';
import carouselIMG_desktop3 from '../../assets/carouselSection/slide3/carouselIMG_desktop.png';
import CarouselSlide from './CarouselSlide';

const StyledCarousel = styled.div`
    flex-direction: column;,
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const CarouselSection = () => {
    const [carouselPosition, updateCarouselPosition] = useState(1);
    const [carouselText, updateCarouselText] = useState(carouselText1);
    const [carouselImage, updateCarouselImage] = useState(carouselIMG1);
    const [carouselTextDesktop, updateCarouselTextDesktop] = useState(carouselText_desktop1);
    const [carouselImageDesktop, updateCarouselImageDesktop] = useState(carouselIMG_desktop1);
    const [intervalId, setIntervalId] = useState(null);

    const handleCarousel = (position) => {
        switch (position) {
            case 1:
                updateCarouselText(carouselText1);
                updateCarouselImage(carouselIMG1);

                updateCarouselTextDesktop(carouselText_desktop1);
                updateCarouselImageDesktop(carouselIMG_desktop1);
                break;
            case 2:
                updateCarouselText(carouselText2);
                updateCarouselImage(carouselIMG2);

                updateCarouselTextDesktop(carouselText_desktop2);
                updateCarouselImageDesktop(carouselIMG_desktop2);
                break;
            default:
                updateCarouselText(carouselText3);
                updateCarouselImage(carouselIMG3);

                updateCarouselTextDesktop(carouselText_desktop3);
                updateCarouselImageDesktop(carouselIMG_desktop3);
                break;
        }
    };
    
      useEffect(() => {
        const id = setInterval(() => {
          const updatedNumber = carouselPosition === 3 ? 1 : carouselPosition + 1;
          updateCarouselPosition(updatedNumber);
          handleCarousel(updatedNumber);
        }, 5000);
    
        setIntervalId(id);
    
        return () => clearInterval(id);
      }, [carouselPosition]);
    
      const handleMouseEnter = () => {
        clearInterval(intervalId);
      };
    
      const handleMouseLeave = () => {
        const id = setInterval(() => {
          const updatedNumber = carouselPosition === 3 ? 1 : carouselPosition + 1;
          updateCarouselPosition(updatedNumber);
          handleCarousel(updatedNumber);
        }, 5000);
        setIntervalId(id);
      };
    
    return (
        <div id='carouselSection' className='pageContainer'>
            <StyledCarousel className='mobile'>
                <CarouselSlide carouselPosition={carouselPosition} carouselText={carouselText} carouselIMG={carouselImage} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            </StyledCarousel>
            <StyledCarousel className='desktop'>
                <CarouselSlide carouselPosition={carouselPosition} carouselText={carouselTextDesktop} carouselIMG={carouselImageDesktop} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            </StyledCarousel>
        </div>
        
    );
};

export default CarouselSection;