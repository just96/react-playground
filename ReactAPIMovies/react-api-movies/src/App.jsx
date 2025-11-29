import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [inputMovie, setInputMovie] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonfakery.com/movies/simple-paginate");
        const data = await res.json();
        setMovies(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error getting data!", error);
      }
    };
    fetchData();
  }, []);

  const addMovie = (movieTitle) => {
    if (!movieTitle) return;
    const newMovie = {
      id: Date.now().toString(),
      original_title: movieTitle,
    };
    setMovies((prev) => [newMovie, ...prev]);
    setInputMovie("");
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const editMovie = (id, movieTitle) => {
    const newMovieTitle = window.prompt("Enter new title", movieTitle);

    if (!newMovieTitle) return;

    setMovies((prev) => prev.map((movie) => (movie.id === id ? { ...movie, original_title: newMovieTitle } : movie)));
  };

  return (
    <>
      <h1>React API Movies</h1>
      <div>
        <input
          type="text"
          placeholder="Insert new movie"
          onChange={(e) => {
            setInputMovie(e.target.value);
          }}
          value={inputMovie}
        ></input>
        <button
          type="button"
          onClick={() => addMovie(inputMovie)}
          style={{ color: "green", padding: "1px 1px", fontSize: "12px" }}
        >
          Add Movie
        </button>
      </div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.original_title}
              <button
                style={{ color: "red", padding: "1px 1px", fontSize: "12px" }}
                type="button"
                onClick={() => deleteMovie(movie.id)}
              >
                Delete
              </button>
              <button
                style={{ color: "blue", padding: "1px 1px", fontSize: "12px" }}
                type="button"
                onClick={() => editMovie(movie.id, movie.original_title)}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
