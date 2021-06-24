import React from "react";
import styled from "styled-components";
import AddIcon from "../assets/AddIcon";

const AddTask = () => {
  return (
    <StyledAddTask>
      <AddIcon></AddIcon>
      <TaskInput placeholder="New Task"></TaskInput>
    </StyledAddTask>
  );
};

const StyledAddTask = styled.div`
  display: flex;
  align-items: center;

  width: 85%;
  height: 3em;
  //border: 1px solid red;
`;

const TaskInput = styled.input`
  flex: 4;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
`;

export default AddTask;
