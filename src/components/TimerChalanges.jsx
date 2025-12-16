import { useState, useRef, useEffect } from "react";
import { ResultModel } from "./ResultModel";

export const TimerChalanges = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const dialogShown = useRef(false);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [timerStarted, setTimerStarted] = useState(false);
  const timerIsActive = timerStarted && timeRemaining > 0;

  useEffect(() => {
    if (timeRemaining <= 0 && timerStarted && !dialogShown.current) {
      clearInterval(timer.current);
      dialogShown.current = true;
      dialog.current.open();
      setTimerStarted(false);
      setTimeRemaining(targetTime * 1000);
    }
  }, [timeRemaining, timerStarted, targetTime]);

  const handleReset = () => {
    dialogShown.current = false;
  };

  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModel
        ref={dialog}
        targetTime={targetTime}
        result="Lost"
        onClose={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is Running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
};
