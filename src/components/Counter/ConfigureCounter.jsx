import { useState } from "react";
import { log } from "../../log";
export const ConfigureCounter = ({ onSet }) => {
  log("<ConfigureCounter />", 1);
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    onSet(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <div>
      <section id="configure-counter">
        <h2>Set Counter</h2>
        <input type="number" onChange={handleChange} value={enteredNumber} />
        <button onClick={handleSetClick}>Set</button>
      </section>
    </div>
  );
};

//we create this component because of unnecessary randaring of parent component or app component. App component will not be executed on every key stroke, because state changes and re-execution of child component don't trigger parent component execution.
