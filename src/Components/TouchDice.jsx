import { useState } from "react";
import styled from "styled-components";

function TouchDice({currentDice, setCurrentDice,handleScore, setScore}) {
  

  

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function roleDice() {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    handleScore(randomNumber)
  }

  const handleReset = (setScore) =>{
        setScore((prev) => 0);
  }

  return (
    <DiceContainer>
      <DiceImage onClick={roleDice} src={`/imgs/dice_${currentDice}.png`}></DiceImage>
      <Text>Click on Dice to roll</Text>
      <ButtonContainer>
        <ResetButton onClick={handleReset}>Reset Score</ResetButton>
        <RulesButton>Show Rules</RulesButton>
      </ButtonContainer>
    </DiceContainer>
  );
}

export default TouchDice;

const DiceContainer = styled.div`
    width: 16vw;
    margin: 0 auto;
  `;

  const DiceImage = styled.img`
    margin: 0 auto;
    cursor: pointer;
  `;

  const Text = styled.h2`
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    text-align: center;
    margin-bottom: 20px;
  `;

  const ButtonContainer = styled.div`   
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
  `;

  const ResetButton = styled.button`
    width: 175px;
    padding: 10px 18px;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    opacity: 0px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
  `;

  const RulesButton = styled.button`
    width: 175px;
    padding: 10px 18px;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: black;
    opacity: 0px;
    color: white;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
  `;