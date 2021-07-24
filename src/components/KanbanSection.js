import React, { useState } from "react";
import styled from "styled-components";
import AddSectionButton from "./AddSectionButton";
import { motion } from "framer-motion";
import EllipsisBuutton from "../assets/EllipsisButton";
import KanbanTaskList from "./KanbanTaskList";
import SavedSection from "./SavedSection";
const KanbanSection = ({
  isHover,
  setIsHover,
  sections,
  setSections,
  tasks,
  sectionTitle,
  sectionId,
  index,
  taskNote,
  setTaskNote,
}) => {
  const [sectionTitleInput, setSectionTitleInput] = useState("");

  const [savedSection, setSavedSection] = useState(false);

  const debugg = () => {
    console.log("hovveeerrrr");
  };

  const userInputHandler = (e) => {
    setSectionTitleInput(e.target.value);
  };

  const saveSectionTitle = (e) => {
    e.preventDefault();
    const saveTask = sections.map((el) =>
      el.id === sectionId ? { ...el, title: sectionTitleInput } : el
    );

    setSections(saveTask);

    setSectionTitleInput(""); // clear input field
    setSavedSection(!savedSection);
  };

  return (
    <StyledKanbanSection id="scroll">
      {!savedSection ? (
        <SectionHeader id="clear-on-submit-header" onSubmit={saveSectionTitle}>
          <SectionTitle
            placeholder="Header Title"
            value={sectionTitleInput}
            type="text"
            onChange={userInputHandler}
          ></SectionTitle>
        </SectionHeader>
      ) : (
        <SavedSection
          sectionTitle={sectionTitle}
          taskLength={tasks.length}
        ></SavedSection>
      )}

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
          index={index}
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

  height: 90%;
  position: relative;
  min-width: 17em;
`;

const SectionHeader = styled.form`
  border: 1px solid rgb(255, 255, 255, 0.3);
  padding: 1em;
  border-radius: 0.5em;
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
