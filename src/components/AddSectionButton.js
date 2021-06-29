import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const AddSectionButton = ({
  isHover,
  setIsHover,
  sections,
  setSections,
  nextSectionId,
  setNextSectionId,
  sectionTitle,
  setSectionTitle,
  sectionId,
}) => {
  //filter the hovered div using array filter
  return (
    <AddSectionDiv
      onClick={() => setSections([...sections, { id: uuidv4(), tasks: [] }])}
      onMouseEnter={() => {
        setIsHover(!isHover);

        // console.log(sectionId);
      }}
      onMouseLeave={() => {
        setIsHover(!isHover);
      }}
      // whileHover={{ backgroundColor: "rgb(255, 255, 255)" }}
      style={isHover ? { backgroundColor: "#A4AAE0" } : {}}
    >
      {isHover && <p>Add Section</p>}
    </AddSectionDiv>
  );
};

const AddSectionDiv = styled(motion.div)`
  height: 10%;
  width: 5em;
  // border: 1px solid red;
  position: absolute;
  top: 50%;
  // left: 25%;
  margin-top: -50px;
  margin-left: 50%; // to center div...
  transform: translateX(-50%); // ...while overflowing
  display: flex;
  align-items: center;
  justify-content: center;
  //z-index: 100;
  cursor: pointer;

  p {
    font-size: 0.7rem;
    color: white;
  }
`;

export default AddSectionButton;

/*
<AddSectionDiv
onMouseEnter={() => {
  setIsHover(!isHover);
}}
onMouseLeave={() => {
  setIsHover(!isHover);
}}
// whileHover={{ backgroundColor: "rgb(255, 255, 255)" }}
style={isHover ? { backgroundColor: "#A4AAE0" } : {}}
>
{isHover && <p>Add Section</p>}
</AddSectionDiv>
*/
