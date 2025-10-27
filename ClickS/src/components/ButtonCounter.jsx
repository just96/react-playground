export default function ButtonCounter({ number, increaseOne, resetBtn }) {
  return (
    <div>
      <h1>ClickS</h1>
      <div className="value-display">{number}</div>
      <button id="increment-btn" onClick={increaseOne}>
        Incrementar +1
      </button>
      <button onClick={resetBtn}>Reset Counter</button>
    </div>
  );
}
