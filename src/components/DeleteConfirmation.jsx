import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  // Progress logic
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        if (prev >= TIMER) {
          clearInterval(interval);
          return TIMER;
        }
        return prev + 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  // Confirm logic (runs once)
  useEffect(() => {
    const timeout = setTimeout(onConfirm, TIMER);
    return () => clearTimeout(timeout);
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>

      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>

      <progress value={elapsedTime} max={TIMER} />
    </div>
  );
}
