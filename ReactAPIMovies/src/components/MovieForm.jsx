import Button from "./Button";
import Input from "./Input";

export default function MovieForm({ handleChange, inputValue, addMovie }) {
  return (
    <div>
      <Input placeholder="Insert new movie" onChange={handleChange} value={inputValue} />
      <Button handleClick={addMovie} buttonStyle={{ color: "green" }}>
        Add Movie
      </Button>
    </div>
  );
}
