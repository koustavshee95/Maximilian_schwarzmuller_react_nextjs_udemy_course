import { useImperativeHandle, useRef, forwardRef } from "react";

export const ResultModel = forwardRef(
  ({ result, targetTime, onClose }, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    const handleClose = () => {
      dialog.current.close();
      onClose?.();
    };

    return (
      <dialog ref={dialog} className="result-modal">
        <h2>You {result} </h2>
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stop the timer with <strong>X Seconds left.</strong>
        </p>
        <form method="dialog">
          <button onClick={handleClose}>Close</button>
        </form>
      </dialog>
    );
  }
);
