import React, {
  Fragment,
  useState,
  useEffect,
  useMemo,
  useDebugValue,
} from "react";
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
  const [timerReset, setTimerReset] = useState(true);
  const [timerStart, setTimerStart] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [showCounter, setShowCounter] = useState(false);
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  const minutesLeft = minutes < 10 ? `0${minutes}` : minutes;
  const secondsLeft = seconds < 10 ? `0${seconds}` : seconds;

  const expandTimer = () => {
    isOpen ? setIsOpen(!isOpen) : null;
  };

  const addTimeSeconds = () => {
    setSeconds((m) => (m !== 59 ? m + 1 : (m = 0)));
  };

  const subtractTimeSeconds = () => {
    setSeconds((m) => m - 1);
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
            subtractTimeSeconds={subtractTimeSeconds}
          ></SubtractIcon>
        )}
        <RunTimer
          seconds={seconds}
          minutes={minutes}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          secondsLeft={secondsLeft}
          timerReset={timerReset}
          setTimerReset={setTimerReset}
          timerStart={timerStart}
          setTimerStart={setTimerStart}
        ></RunTimer>
        {minutesLeft}:{secondsLeft}
        {!isOpen && (
          <AddTimeIcon
            isOpen={isOpen}
            showCounter={showCounter}
            addTimeSeconds={addTimeSeconds}
          ></AddTimeIcon>
        )}
      </TimerCount>

      <AnimatePresence>
        {!isOpen && (
          <Fragment>
            <TimerPointer></TimerPointer>

            <PomodoroSlider
              id="scrolling-container"
              minutes={minutes}
              setMinutes={setMinutes}
              seconds={seconds}
              setSeconds={setSeconds}
            ></PomodoroSlider>
            <ButtonsContainer
              style={!timerStart && timerPaused ? { width: "75%" } : {}}
            >
              {(timerStart === true && timerReset === false) ||
              (timerStart === false &&
                timerPaused === true &&
                timerReset === false) ? (
                <PauseButton
                  showReset={showReset}
                  setShowReset={setShowReset}
                  timerStart={timerStart}
                  setTimerStart={setTimerStart}
                  timerPaused={timerPaused}
                  setTimerPaused={setTimerPaused}
                  setTimerReset={setTimerReset}
                ></PauseButton>
              ) : null}
              {(timerStart === false && timerReset === true) ||
              (timerStart === false &&
                timerReset === true &&
                timerPaused === false) ? (
                <StartButton
                  setShowReset={setShowReset}
                  timerStart={timerStart}
                  setTimerStart={setTimerStart}
                  timerPaused={timerPaused}
                  setTimerPaused={setTimerPaused}
                  setTimerReset={setTimerReset}
                ></StartButton>
              ) : null}

              {timerPaused === true && timerReset === false && (
                <ResetButton
                  minutes={minutes}
                  setMinutes={setMinutes}
                  timerStart={timerStart}
                  setTimerStart={setTimerStart}
                  setSeconds={setSeconds}
                  timerReset={timerReset}
                  setTimerReset={setTimerReset}
                  timerPaused={timerPaused}
                  setTimerPaused={setTimerPaused}
                  setTimerReset={setTimerReset}
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
