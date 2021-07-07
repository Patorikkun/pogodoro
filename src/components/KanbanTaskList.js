import React from "react";
import styled from "styled-components";
import KanbanTask from "./KanbanTask";
import AddTask from "./AddTask";
const KanbanTaskList = ({
  setSections,
  sections,
  tasks,
  sectionId,
  setTaskNote,
  taskNote,
}) => {
  return (
    <StyledList>
      {sections.map((el) =>
        el.id === sectionId
          ? el.tasks.map((ele, index) => (
              <KanbanTask key={index} note={ele}></KanbanTask>
            ))
          : null
      )}
      <AddTask
        setSections={setSections}
        sections={sections}
        tasks={tasks}
        sectionId={sectionId}
        setTaskNote={setTaskNote}
        taskNote={taskNote}
      ></AddTask>
    </StyledList>
  );
};

const StyledList = styled.ul`
  margin-top: 1em;
  list-style-type: none;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default KanbanTaskList;
