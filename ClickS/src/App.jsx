import { useState } from "react";
import "./App.css";
import ButtonCounter from "./components/ButtonCounter";
import History from "./components/History";

function App() {
  const [count, setCount] = useState(0);
  const [numberHistory, setNumberHistory] = useState([]);

  function increaseByOne() {
    setCount((c) => c + 1);
    setNumberHistory((prevNumber) => [...prevNumber, count + 1]);
  }

  function resetCounter() {
    setCount(0);
    setNumberHistory([]);
  }

  return (
    <>
      <div className="container">
        <ButtonCounter number={count} increaseOne={increaseByOne} resetBtn={resetCounter} />
      </div>
      <div className="history">
        <History numberHistory={numberHistory} />
      </div>
    </>
  );
}

export default App;
