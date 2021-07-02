import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddIcon from "../assets/AddIcon";

const AddTask = ({
  sections,
  setSections,
  tasks,
  sectionId,
  setTaskNote,
  taskNote,
}) => {
  const SaveTask = (e, id) => {
    e.preventDefault();
    const updateTasks = sections.map((el) =>
      el.id === sectionId ? { ...el, tasks: [...el.tasks, taskNote] } : el
    );

    setSections(updateTasks);
    document.getElementById("clear-on-submit").reset(); // clear input field
  };

  return (
    <StyledAddTask id="clear-on-submit" onSubmit={SaveTask}>
      <AddIcon></AddIcon>
      <TaskInput
        placeholder="New Task"
        onChange={(event) => setTaskNote(event.target.value)}
      ></TaskInput>
    </StyledAddTask>
  );
};

const StyledAddTask = styled.form`
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
