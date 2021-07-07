import React, { Fragment, useState, useEffect } from "react";
import PomodoroSlider from "./PomodoroSlider";
import { motion, AnimatePresence } from "framer-motion";
import TimerPointer from "../assets/Pointer.js";
import styled from "styled-components";
import StartButton from "./StartButton";
import SubtractIcon from "../assets/SubtractIcon";
import AddTimeIcon from "../assets/AddTimeIcon";
import RunTimer from "./RunTimer";
import ResetButton from "./ResetButton";
import PauseButton from "./PauseButton";
const Timer = ({ isOpen, setIsOpen }) => {
  const [showReset, setShowReset] = useState(false);
  const [timerStart, setTimerStart] = useState(false);
  const [showCounter, setShowCounter] = useState(false);
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  const minutesLeft = minutes < 10 ? `0${minutes}` : minutes;
  const secondsLeft = seconds < 10 ? `0${seconds}` : seconds;

  const expandTimer = () => {
    isOpen ? setIsOpen(!isOpen) : null;
  };

  const addTime = () => {
    setMinutes(minutes + 1);
  };

  const subtractTime = () => {
    setMinutes(minutes - 1);
  };

  return (
    <TimerContainer
      initial={{ y: 200, height: "40vh" }}
      animate={isOpen ? { y: 20, height: "10vh" } : {}}
    >
      <TimerCount
        onClick={expandTimer}
        onMouseEnter={() => setShowCounter(!showCounter)}
        onMouseLeave={() => setShowCounter(!showCounter)}
        style={isOpen ? { fontSize: "3rem", cursor: "pointer" } : {}}
      >
        {!isOpen && (
          <SubtractIcon
            isOpen={isOpen}
            showCounter={showCounter}
            subtractTime={subtractTime}
          ></SubtractIcon>
        )}
        {timerStart && (
          <RunTimer
            seconds={seconds}
            minutes={minutes}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
            secondsLeft={secondsLeft}
          ></RunTimer>
        )}
        {minutesLeft}:{secondsLeft}
        {!isOpen && (
          <AddTimeIcon
            isOpen={isOpen}
            showCounter={showCounter}
            addTime={addTime}
          ></AddTimeIcon>
        )}
      </TimerCount>

      <AnimatePresence>
        {!isOpen && (
          <Fragment>
            <TimerPointer></TimerPointer>
            <PomodoroSlider></PomodoroSlider>
            <ButtonsContainer
              style={
                (timerStart && showReset) || (!timerStart && showReset)
                  ? { width: "75%" }
                  : {}
              }
            >
              {(timerStart && showReset) || (!timerStart && showReset) ? (
                <PauseButton
                  showReset={showReset}
                  setShowReset={setShowReset}
                  timerStart={timerStart}
                  setTimerStart={setTimerStart}
                ></PauseButton>
              ) : null}
              {!timerStart && !showReset ? (
                <StartButton
                  setShowReset={setShowReset}
                  timerStart={timerStart}
                  setTimerStart={setTimerStart}
                ></StartButton>
              ) : null}

              {showReset && (
                <ResetButton
                  minutes={minutes}
                  setMinutes={setMinutes}
                  timerStart={timerStart}
                  setTimerStart={setTimerStart}
                ></ResetButton>
              )}
            </ButtonsContainer>
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

  //width: 5em;
  // border: 1px solid red;
  font-size: 5em;
  position: absolute;
  // min-height: 50%;
`;

const TimerCount = styled.p`
  width: 5em;
  //border: 1px solid orange;
  color: white;
  font-weight: 200;
  font-size: 6rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // border: 1px solid red;
`;

export default Timer;
