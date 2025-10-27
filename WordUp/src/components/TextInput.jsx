export default function TextInput({ word, onChange, checkSpace }) {
  return (
    <div>
      {" "}
      <input type="text" placeholder="Insert word..." onChange={onChange} value={word} onKeyDown={checkSpace} />
      <h3>Input here: </h3> <p className="word">{word}</p>
    </div>
  );
}
