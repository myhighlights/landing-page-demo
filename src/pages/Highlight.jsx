import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Generating from '../components/demo/generating/Generating';
import HighlightVideo from '../components/demo/generating/HighlightVideo';

const StyledHightlight = styled.div`
    height: 90vh;
    display: flex; 
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
`;

const Highlight = () => {
    const [showGenerating, setShowGenerating] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGenerating(false);
        }, 5200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <StyledHightlight>
            {showGenerating && <Generating />}
            {!showGenerating && <HighlightVideo />}
        </StyledHightlight>
    );
};

export default Highlight;