import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ value }) =>
    value === "X" ? "#c6c6c6" : value === "O" ? "#ebebeb" : "#f2f2f2"};
  border: none;
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  outline: none;
  height: 80px;
  width: 80px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ value }) => (value === null ? "#d9d9d9" : value)};
  }
`;

const Square = ({ value, onClick }) => (
  <StyledButton onClick={onClick} value={value}>
    {value}
  </StyledButton>
);

export default Square;
