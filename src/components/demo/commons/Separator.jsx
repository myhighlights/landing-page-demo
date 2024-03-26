import React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled.span`
    width: 2px;
    border-left: 2px solid #363636;
    height: 2rem;
`;

const Separator = () => {

    return (
        <StyledSeparator />
    );
};

export default Separator;