import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 96px;
  font-weight: 700;
  line-height: 144px;
  text-align: left;
`;

const Button = styled.button`
  width: 200px;
  padding: 10px 18px 10px 18px;
  gap: 10px;
  border-radius: 5px;
  opacity: 0px;
  background: #000;
  color: white;
  right: 0;
`;

function StartGame({toggle}) {
  return (
    <Container>
      <div className="start-img">
        <img src="/imgs/dices.png" alt="Dices" />
      </div>
      <div className="start-text">
        <Heading>DICE GAME</Heading>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;
