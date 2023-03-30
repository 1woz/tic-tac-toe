import React from "react";
import styled from "styled-components";
import Square from "./Square";

const StyledBoard = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Board = ({ squares, onClick }) => (
  <StyledBoard>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </StyledBoard>
);

export default Board;

