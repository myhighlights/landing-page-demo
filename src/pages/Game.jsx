import React from "react";
import styled from "styled-components";
import SelectedGame from "../components/demo/game/SelectedGame";
import ButtonSection from "../components/demo/game/ButtonSection";
import OptionSection from "../components/demo/game/OptionSection";

const StyledGamePageContainer = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Game = () => {
  return (
    <StyledGamePageContainer>
      <SelectedGame />
      <OptionSection />
      <ButtonSection />
    </StyledGamePageContainer>
  );
};

export default Game;
