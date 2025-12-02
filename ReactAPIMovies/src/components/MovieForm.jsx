import Button from "./Button";
import Input from "./Input";

export default function MovieForm({ handleChange, inputValue, addMovie }) {
  return (
    <div className="flex items-center gap-2 mb-4 w-full max-w-md mx-auto">
      <Input className="input" placeholder="Insert new movie" onChange={handleChange} value={inputValue} />
      <Button handleClick={addMovie} className={"btn btn-primary"}>
        Add Movie
      </Button>
    </div>
  );
}
