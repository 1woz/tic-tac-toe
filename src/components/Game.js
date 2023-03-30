import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";
import styled from "styled-components";

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const GameHeader = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const GameFooter = styled.div`
  margin-top: 40px;
`;

const StyledButton = styled.button`
  background-color: #f5f5f5;
  border: 2px solid #333;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #333;
    color: #f5f5f5;
  }
`;

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // if user clicks on square that is taken or if game is won, return
    if (winner || squares[i]) return;
    // add X or O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext); // return opposite value
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Move:${move}` : "START";
      return (
        <StyledButton key={move} onClick={() => jumpTo(move)}>
          {destination}
        </StyledButton>
      );
    });

  return (
    <StyledGame>
      <GameHeader>Tic Tac Toe</GameHeader>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <GameFooter>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </GameFooter>
    </StyledGame>
  );
};

export default Game;
