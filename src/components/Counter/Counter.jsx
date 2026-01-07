import { useState, memo, useCallback, useMemo, useEffect } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";
import CounterHistory from "./CounterHistory.jsx";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");

  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);

  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  // useEffect(() => {
  //     setCounterChanges([{ value: initialCount, id: Math.random() * 1000 }]);
  // }, [initialCount])
  

  // const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState([
    { value: initialCount, id: Math.random() * 1000 },
  ]);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0
  );

  const handleDecrement = useCallback(function handleDecrement() {
    // setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges((prevCounterChanges) => [
      { value: -1, id: Math.random() * 1000 },
      ...prevCounterChanges,
    ]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    // setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges((prevCounterChanges) => [
      { value: 1, id: Math.random() * 1000 },
      ...prevCounterChanges,
    ]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});

export default Counter;

//here we used memo function to prevent the unnecessary component render.
//memo compare props value (old prop value => new prop value). Exactly same or not which coming through new prop array/object/value etc. This execution functio will be prevented by memo.
//this counter part are executed by useEffect hooks. or we can say simply this value are coming because of count change or internal state chage, thats are not effected by memo. Its only care about external changes not internal changes.Memo only prevents the function are triggred by parent component or app component in this case.

//dont overuse memo();
// use it as high up in the component tree as possible.Because blocking a component execution there will also block all child component execution.
//checking props with memo cost performance. dont warp with all your components. It will just add unnecessary checks.
//Dont use the component where props will change frequently. memo would just perform a meaningless check in such cases.

//we prevent re-creation of two function by using useCallback() hook.
//state you register in a component function is scoped to that component you could say, and also it re-created whenever you reused this component. If you used two <Counter initialCount={chosenCount} /> component inside app component every counter received own independent counter state.This state is not shared.Therefore id i chage the value of first counter we can see this has no impect second counter value and vice versa.
//NOTE: The position of the component in the component tree.React track state by component type & position(of the component) in the tree.

//key allowes react to clearly identify the component if there is a dynamic list of similar component.
//key will destray old component instance and recreate it.
