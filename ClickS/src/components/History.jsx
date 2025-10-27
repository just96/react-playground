export default function History({ numberHistory }) {
  return (
    <div>
      <ul className="history">
        <h2>History Number</h2>
        {numberHistory.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
