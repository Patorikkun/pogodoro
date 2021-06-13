import React from "react";
import styled from "styled-components";

const StartButton = () => {
  return (
    <StyledButton>
      <p>S T A R T</p>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  height: 0.5em;
  width: 2em;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    font-size: 1rem;
  }
`;

export default StartButton;
