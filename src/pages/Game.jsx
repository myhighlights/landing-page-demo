import React, { useState } from "react";
import styled from "styled-components";
import SelectedGame from "../components/demo/game/SelectedGame";
import ButtonSection from "../components/demo/game/ButtonSection";
import OptionSection from "../components/demo/game/OptionSection";

const StyledGamePageContainer = styled.div`
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Game = () => {
  const [checkedCount, setCheckedCount] = useState(0);
  const [actionType, updateActionType] = useState([]);

  const handleCheckboxChange = (isChecked) => {
    setCheckedCount(isChecked ? checkedCount + 1 : checkedCount - 1);
  };

  return (
    <StyledGamePageContainer>
      <SelectedGame />
      <OptionSection actionType={actionType} updateActionType={updateActionType} onCheckboxChange={handleCheckboxChange} />
      <ButtonSection actionType={actionType} isButtonEnabled={checkedCount >= 2} />
    </StyledGamePageContainer>
  );
};

export default Game;
