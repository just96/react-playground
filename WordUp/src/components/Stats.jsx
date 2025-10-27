export default function Stats({ charNumber, wordNumber }) {
  return (
    <div>
      <h3>Number of characters : </h3> <p className="word">{charNumber}</p>
      <h3>Number of words : </h3> <p className="word">{wordNumber}</p>
    </div>
  );
}
