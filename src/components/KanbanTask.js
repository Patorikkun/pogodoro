import React from "react";
import styled from "styled-components";

const KanbanTask = () => {
  return (
    <StyledTask>
      <CheckTask type="checkbox"></CheckTask>
      <LabelTask>Pogodoro</LabelTask>
    </StyledTask>
  );
};

const StyledTask = styled.li`
  height: 3.25em;
  width: 85%;
  border: 1.5px solid white;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`;

const CheckTask = styled.input`
  flex: 1;
  transform: scale(1.2);
`;
const LabelTask = styled.label`
  color: white;
  flex: 4;
`;
export default KanbanTask;
