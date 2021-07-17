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
          {sections.map((section, index) => (
            <KanbanSection
              index={index}
              key={section.id}
              sectionId={section.id}
              sectionTitle={section.title}
              tasks={section.tasks}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              isHover={isHover}
              setIsHover={setIsHover}
              sections={sections}
              setSections={setSections}
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
  height: 70vh;
  width: 65%;

  border: 1px solid rgb(255, 255, 255, 0.7);

  position: absolute;
`;

export default Kanban;
