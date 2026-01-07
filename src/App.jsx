import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import { ConfigureCounter } from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = (newCount) => {
    setChosenCount(newCount);
    console.log(chosenCount); //0 Its not updated instantly. to use the instantly have to use pass a function inside state updating function(like handleIncrement,handleDecrement inside Counter.jsx).This function received old state snapshot and should return new state snapsort. This won't work.

    //setChosenCount(chosenCount + 1); //1 if we set value 10. Then we will get counter value 1,  because it will add oldstate +1 (0+1) .To resolve this issue if we do:
    setChosenCount((prevChoCount) => prevChoCount + 1);
  };

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        {/* <Counter initialCount={chosenCount} /> Thats enable component reusabe because if I chaned this component counter above component counter are not changed,state is scoped to a component*/}
      </main>
    </>
  );
}

export default App;

//React checks for necessary DOM updates via VERTUAL DOM.
//Its create and compare vertual dom snap short to find out which  parts of the render ui need to be updated.
//when start a react app, react create a component tree and derives the actual code that should be render from that component tree and then create a vertual dom snap shot so its not reaching out to the real dom instead its create vertual representation of how real dom should look like.
//after that react compare to the last vertual dom snapshot is created. If the app is just started here is no last snap shot and there fore react ofcourse react did everything change and its goes ahead to the real dom and makes those changes.
