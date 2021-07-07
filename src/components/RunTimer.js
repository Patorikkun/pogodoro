import React, { Fragment, useEffect } from "react";

const RunTimer = ({
  seconds,
  minutes,
  setSeconds,
  setMinutes,
  secondsLeft,
}) => {
  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [secondsLeft]);

  return <Fragment></Fragment>;
};

export default RunTimer;
