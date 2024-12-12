import React, { useState } from "react";
import styled from "styled-components";
import SelectNumber from "./SelectNumber";
import TouchDice from "./TouchDice";

function Score() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);

  const handleScore = (rolledNumber) =>{
    if(rolledNumber === selectedNumber){
      setScore((prev) => prev + selectedNumber);
    }
    else{
      setScore((prev) => prev - 2);
    }
  }

  return (
    <Container>
      <Header>
        <ScoreWrapper>
          <Heading>{score}</Heading>
          <Total>Total Score</Total>
        </ScoreWrapper>
        <SelectNumber
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </Header>
      <TouchDice currentDice={currentDice} setCurrentDice={setCurrentDice}  handleScore={handleScore} setScore={setScore}/>
    </Container>
  );
}

export default Score;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  max-width: 80%;
  margin: auto;
  flex-direction: column;
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 80px;
  font-weight: 500;
  margin: 0;
`;

const Total = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;
