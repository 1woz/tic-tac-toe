import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: lightgrey;
  border: 2px solid black;
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  outline: none;
`;

const Square = ({ value, onClick }) => (
  <StyledButton onClick={onClick}>{value}</StyledButton>
);

export default Square;
