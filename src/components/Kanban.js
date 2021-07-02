import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KanbanSection from "./KanbanSection";
import AddSectionButton from "./AddSectionButton";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Kanban = ({
  isOpen,
  setIsOpen,
  isHover,
  setIsHover,
  sections,
  setSections,
  nextSectionId,
  setNextSectionId,
  sectionTitle,
  setSectionTitle,
  taskNote,
  setTaskNote,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledKanban
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 130 }}
          exit={{ opacity: 0 }}

          //style={isOpen ? { display: "block" } : { display: "none" }}
        >
          {sections.map((section) => (
            <KanbanSection
              key={section.id}
              sectionId={section.id}
              tasks={section.tasks}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              isHover={isHover}
              setIsHover={setIsHover}
              sections={sections}
              setSections={setSections}
              sectionTitle={sectionTitle}
              setSectionTitle={setSectionTitle}
              taskNote={taskNote}
              setTaskNote={setTaskNote}
            ></KanbanSection>
          ))}
        </StyledKanban>
      )}
    </AnimatePresence>
  );
};

const StyledKanban = styled(motion.div)`
  margin: auto;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  min-height: 70vh;
  width: 60vw;

  border: 1px solid white;
  position: absolute;
`;

export default Kanban;
