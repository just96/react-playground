import { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import History from "./components/History";
import Stats from "./components/Stats";

export function App() {
  const [word, setWord] = useState("");
  const [wordHistory, setWordHistory] = useState([]);

  function updateWord(e) {
    setWord(e.target.value);
    if (!e.target.value) setWordHistory([]);
  }

  function getWordNumber() {
    return word.trim().split(" ").filter(Boolean).length;
  }

  function checkKey(e) {
    if (e.key === " ") {
      let words = word.trim().split(" ");
      let newWord = words[words.length - 1];
      return setWordHistory([...wordHistory, newWord]);
    }
  }

  return (
    <div className="container">
      <TextInput word={word} onChange={updateWord} checkSpace={checkKey} />
      <Stats charNumber={word.length} wordNumber={getWordNumber()} />
      <History wordHistory={wordHistory} />
    </div>
  );
}
