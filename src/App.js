import React, { useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Timer from "./components/Timer";
import myTasks from "./data.js";
import Kanban from "./components/Kanban";
import { v4 as uuidv4 } from "uuid";

function App() {
  //data management
  const [sections, setSections] = useState([{ id: uuidv4() }]);
  const [sectionTitle, setSectionTitle] = useState("");
  const [nextSectionId, setNextSectionId] = useState("");

  //animation effects
  const [isOpen, setIsOpen] = useState(false); //open kanban
  const [isHover, setIsHover] = useState(false); // add section hover

  // const addSection = (newSection) => {
  //  setSections((sections) => [...sections, newSection]);
  // };

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <section className="main">
        <Timer setIsOpen={setIsOpen} isOpen={isOpen}></Timer>

        <Kanban
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          isHover={isHover}
          setIsHover={setIsHover}
          sections={sections}
          setSections={setSections}
          nextSectionId={nextSectionId}
          setNextSectionId={setNextSectionId}
          sectionTitle={sectionTitle}
          setSectionTitle={setSectionTitle}
        ></Kanban>
      </section>
    </div>
  );
}

export default App;
