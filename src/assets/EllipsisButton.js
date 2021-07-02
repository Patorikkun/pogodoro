import React from "react";
import styled from "styled-components";

const EllipsisBuutton = () => {
  return (
    <StyledEllipsis
      width="23"
      height="5"
      viewBox="0 0 23 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
      <circle cx="11.5" cy="2.5" r="2.5" fill="white" />
      <circle cx="20.5" cy="2.5" r="2.5" fill="white" />
    </StyledEllipsis>
  );
};

const StyledEllipsis = styled.svg``;

export default EllipsisBuutton;
