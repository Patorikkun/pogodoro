import React from "react";
import PomodoroSlider from "./PomodoroSlider";

import TimerPointer from "../assets/Pointer.js";
import styled from "styled-components";
import StartButton from "./StartButton";

const Timer = ({ isOpen, setIsOpen }) => {
  return (
    <TimerContainer>
      <TimerCount>15:00</TimerCount>
      <TimerPointer></TimerPointer>
      <PomodoroSlider></PomodoroSlider>
      <StartButton isOpen={isOpen} setIsOpen={setIsOpen}></StartButton>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 40vh;
  width: 5em;
  // border: 1px solid red;
  font-size: 5em;
`;

const TimerCount = styled.p`
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
