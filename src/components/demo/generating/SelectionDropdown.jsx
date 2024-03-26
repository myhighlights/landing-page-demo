import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowDown from '../../../assets/demo/highlightVideo/ArrowDown.png';

const StyledSelectionDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledLabel = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: Onest;
    font-size: 16px;
    font-weight: 500;
    line-height: 20.4px;
`;

const StyledOptions = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
`;

const Option = styled.div`
  background-color: ${({ isSelected, isHovered }) => (isSelected || isHovered ? '#FF003D' : '#1A1A1A')};
  color: ${({ isSelected, isHovered }) => (isSelected || isHovered ? 'white' : '#9C9C9C')};
  padding: 1rem .5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: .5rem;
  font-family: Onest;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.4px;
  text-align: left;

  &:hover {
    background-color: #FF003D;
    color: white;
  }
`;

const ArrowIcon = styled.img`
  margin-left: .5rem;
  transform: ${props => (!props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const SelectionDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: '1:1', value: '1:1' },
    { label: '4:5', value: '4:5' },
    { label: '9:16', value: '9:16' },
    { label: '16:9', value: '16:9' }
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledSelectionDropdown>
      <StyledLabel onClick={handleToggle}>
        Select your format
        <ArrowIcon src={ArrowDown} isOpen={isOpen} />
      </StyledLabel>
      <StyledOptions isOpen={isOpen}>
        {options.map(option => (
          <Option key={option.value} isSelected={selectedOption === option.value} onClick={() => setSelectedOption(option.value)} isHovered={false}>
            {option.label}
          </Option>
        ))}
      </StyledOptions>
    </StyledSelectionDropdown>
  );
};

export default SelectionDropdown;