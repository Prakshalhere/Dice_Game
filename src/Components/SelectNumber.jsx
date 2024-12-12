import { useState } from "react";
import styled from "styled-components";

function SelectNumber({ selectedNumber, setSelectedNumber }) {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <SelectionWrapper>
      <ButtonContainer>
        {numbers.map((number) => (
          <SelectButton
            key={number}
            isSelected={number === selectedNumber}
            onClick={() => setSelectedNumber(number)}
          >
            {number}
          </SelectButton>
        ))}
      </ButtonContainer>
      <TextWrapper>Select Number</TextWrapper>
    </SelectionWrapper>
  );
}

export default SelectNumber;

const SelectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: end;
  gap: 25px;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const SelectButton = styled.button`
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  padding: 15px;
  border: 1px solid black;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) =>
    props.isSelected
      ? "white"
      : "black"}; 
`;

const TextWrapper = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;
