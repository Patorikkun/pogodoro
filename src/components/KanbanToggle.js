import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const KanbanToggle = ({ isOpen, setIsOpen }) => {
  return (
    <StyledToggle
      whileHover={{ color: "#fff", opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsOpen(!isOpen)}
      style={isOpen ? { color: "#fff", opacity: 1 } : {}}
    >
      Kanban
    </StyledToggle>
  );
};

const StyledToggle = styled(motion.button)`
  border: none;
  background: none;
  cursor: pointer;
  height: auto;
  width: auto;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
  font-size: 1.2rem;
  color: white;
  opacity: 0.7;
`;

export default KanbanToggle;
