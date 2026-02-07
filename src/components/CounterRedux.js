import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';


const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCounter);
 

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const handleIncrement = ()=>{
    dispatch({type:'increment'})
  };
  
  const increaseHandller =()=>{
    dispatch({ type: "increase" ,amount:5});
  };

  const handleDecrement = ()=>{
    dispatch({type:'decrement'})
  }


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
