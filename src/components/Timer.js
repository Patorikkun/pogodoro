import React, { Fragment } from "react";
import PomodoroSlider from "./PomodoroSlider";
import { motion, AnimatePresence } from "framer-motion";
import TimerPointer from "../assets/Pointer.js";
import styled from "styled-components";
import StartButton from "./StartButton";

const Timer = ({ isOpen, setIsOpen }) => {
  const expandTimer = () => {
    isOpen ? setIsOpen(!isOpen) : null;
  };

  return (
    <TimerContainer
      initial={{ y: 200, height: "40vh" }}
      animate={isOpen ? { y: 20, height: "10vh" } : {}}
    >
      <TimerCount
        onClick={expandTimer}
        style={isOpen ? { fontSize: "3rem" } : {}}
      >
        15:00
      </TimerCount>
      <AnimatePresence>
        {!isOpen && (
          <Fragment>
            <TimerPointer></TimerPointer>
            <PomodoroSlider></PomodoroSlider>

            <StartButton isOpen={isOpen} setIsOpen={setIsOpen}></StartButton>
          </Fragment>
        )}
      </AnimatePresence>
    </TimerContainer>
  );
};

const TimerContainer = styled(motion.div)`
  //margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  //height: 40vh;
  //width: 5em;
  //border: 1px solid red;
  font-size: 5em;
  position: absolute;
`;

const TimerCount = styled.p`
  // border: 1px solid orange;
  color: white;
  font-weight: 200;
  font-size: 6rem;
  margin-bottom: 1rem;
`;

const Tick = styled.div`
  height: 0.4em;
  width: 0.05em;
  background-color: white;
  border-radius: 1em;

  &.big {
    height: 0.7em;
  }
`;

export default Timer;
