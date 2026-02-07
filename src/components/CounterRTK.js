import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import {counterActions} from '../store/counterSlice'


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); // extract the initial state.
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increaseHandller = () => {
    dispatch(counterActions.increase(10)); //{type:some unique identifier,payload:10}
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={increaseHandller}>Increased by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
