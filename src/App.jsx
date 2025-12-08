import { useState } from "react";
import { Header } from "./components/Header";
import { Results } from "./components/Results";
import { UserInput } from "./components/UserInput";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >=1

  let handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevInputValue) => {
      return {
        ...prevInputValue,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeValue={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater then zero.</p>}
       { inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
