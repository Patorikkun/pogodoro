import React, { useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Timer from "./components/Timer";

import Kanban from "./components/Kanban";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <section className="main">
        <Timer setIsOpen={setIsOpen} isOpen={isOpen}></Timer>

        <Kanban setIsOpen={setIsOpen} isOpen={isOpen}></Kanban>
      </section>
    </div>
  );
}

export default App;
