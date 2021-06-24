import React from "react";
import styled from "styled-components";
import KanbanTask from "./KanbanTask";
import AddTask from "./AddTask";
const KanbanTaskList = () => {
  return (
    <StyledList>
      <KanbanTask></KanbanTask>
      <AddTask></AddTask>
    </StyledList>
  );
};

const StyledList = styled.ul`
  margin-top: 1em;
  list-style-type: none;
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default KanbanTaskList;
