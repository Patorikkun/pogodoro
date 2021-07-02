import React, { useState } from "react";
import styled from "styled-components";
import AddSectionButton from "./AddSectionButton";
import { motion } from "framer-motion";
import EllipsisBuutton from "../assets/EllipsisButton";

import KanbanTaskList from "./KanbanTaskList";
const KanbanSection = ({
  isHover,
  setIsHover,
  sections,
  setSections,
  tasks,
  sectionTitle,
  setSectionTitle,
  sectionId,
  taskNote,
  setTaskNote,
}) => {
  const debugg = () => {
    console.log("hovveeerrrr");
  };

  const userInputHandler = (e) => {
    setSectionTitle(e.target.value);
  };

  return (
    <StyledKanbanSection>
      <SectionHeader>
        <SectionTitle
          placeholder="Header Title"
          value={sectionTitle}
          type="text"
          onChange={userInputHandler}
        ></SectionTitle>

        <EllipsisBuutton></EllipsisBuutton>
      </SectionHeader>
      <KanbanTaskList
        tasks={tasks}
        setSections={setSections}
        sections={sections}
        sectionId={sectionId}
        taskNote={taskNote}
        setTaskNote={setTaskNote}
      ></KanbanTaskList>
      <AddSectionBorder
        animate={
          isHover === sectionId ? { backgroundColor: "rgb(255,255,255)" } : {}
        }
      >
        <AddSectionButton
          sectionId={sectionId}
          sections={sections}
          setSections={setSections}
          isHover={isHover}
          setIsHover={setIsHover}
        ></AddSectionButton>
      </AddSectionBorder>
    </StyledKanbanSection>
  );
};

const StyledKanbanSection = styled.div`
  // border-right: 1px solid red;

  height: 65vh;
  position: relative;
  min-width: 17em;
`;

const SectionHeader = styled.div`
  //border: 1px solid red;
  width: 85%;
  height: 2.5em;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
`;

const AddSectionBorder = styled(motion.div)`
  height: 100%;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  right: 0;
  top: 0;
`;

export default KanbanSection;
