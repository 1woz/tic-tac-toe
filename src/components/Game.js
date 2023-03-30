import React, { useState } from "react";
import styled from "styled-components";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameTitle = styled.h1`
  color: #8447ff;
  font-size: 3rem;
  font-weight: 900;
  font-stretch: expanded;
  font-family: "Lucida" Grande, sans-serif;
  margin-bottom: 2rem;
`;

// const GameSubTitle = styled.h2`
//   font-size: 2rem;
//   font-weight: 900;
//   font-stretch: expanded;
//   font-family: "Lucida" Grande, sans-serif;
//   margin-bottom: 1rem;
// `;

const WinnerTitle = styled.h2`
  color: #8447ff;
  font-size: 1.5rem;
`;

// const MovesList = styled.ol`
//   list-style-type: none;
//   padding: 0;
//   margin-top: 1.5rem;
// `;

const GameButton = styled.button`
  background-color: #dcdcdc;
  color: #292929;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 150px;

  &:hover {
    background-color: #c0c0c0;
    color: #fff;
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
    if (winner || squares[i]) return;
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  // const jumpTo = (step) => {
  //   setStepNumber(step);
  //   setXisNext(step % 2 === 0);
  // };

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXisNext(true);
  };

  // const renderMoves = () =>
  //   history.map((_step, move) => {
  //     const destination = move ? `Move:${move}` : "START";
  //     return (
  //       <li key={move}>
  //         <GameButton onClick={() => jumpTo(move)}>{destination}</GameButton>
  //       </li>
  //     );
  //   });

  return (
    <Container>
      <GameTitle>Tic Tac Toe</GameTitle>
      {/* <GameSubTitle>game</GameSubTitle> */}
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <WinnerTitle>
        {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
      </WinnerTitle>
      {/* <MovesList>{renderMoves()}</MovesList> */}
      <GameButton onClick={resetGame}>Reset Game</GameButton>
    </Container>
  );
};

export default Game;
