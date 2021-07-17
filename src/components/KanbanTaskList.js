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
    <ListContainer>
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
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin-top: 1em;
  // margin-right: 0.5em;
  height: 93%;
  //border: 1px solid red;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.6);
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
const StyledList = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default KanbanTaskList;
