import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Kanban = ({ isOpen, setIsOpen }) => {
  return (
    <StyledKanban
      style={isOpen ? { display: "block" } : { display: "none" }}
    ></StyledKanban>
  );
};

const StyledKanban = styled(motion.div)`
  display: none;
  height: 40vh;
  width: 50%;
  background-color: whitesmoke;
`;

export default Kanban;
