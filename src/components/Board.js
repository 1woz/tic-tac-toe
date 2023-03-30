import React from "react";
import styled from "styled-components";
import Square from "./Square";

const BoardContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Board = ({ squares, onClick }) => (
  <BoardContainer>
    {squares.map((square, i) => {
      return <Square key={i} value={square} onClick={() => onClick(i)} />;
    })}
  </BoardContainer>
);

export default Board;

