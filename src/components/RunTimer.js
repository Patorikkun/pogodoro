import React, { Fragment, useEffect, useRef } from "react";

const RunTimer = ({
  seconds,
  minutes,
  setSeconds,
  setMinutes,
  secondsLeft,
  timerReset,
  setTimerReset,
  timerStart,
  setTimerStart,
}) => {
  let timeInterval = null;

  const resetTimer = () => {
    clearInterval(timeInterval);
  };

  timerStart
    ? useEffect(() => {
        timeInterval = setInterval(() => {
          clearInterval(timeInterval);

          if (seconds === 0) {
            if (minutes !== 0) {
              setSeconds(59);
              setMinutes(minutes - 1);
            }
          } else {
            setSeconds(seconds - 1);
          }
        }, 1000);
      }, [secondsLeft])
    : null;

  timerReset ? resetTimer() : null;

  return <Fragment></Fragment>;
};

export default RunTimer;
