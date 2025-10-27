export default function History({ wordHistory }) {
  return (
    <div>
      {" "}
      <h3>History of words : </h3>
      <ul className="word">
        {wordHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
