import Button from "./Button";

export default function MovieList({ movies, handleDelete, handleEdit }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            {movie.original_title}
            <Button buttonStyle={{ color: "red" }} handleClick={() => handleDelete(movie.id)}>
              Delete
            </Button>
            <Button buttonStyle={{ color: "blue" }} handleClick={() => handleEdit(movie.id, movie.original_title)}>
              Edit
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
