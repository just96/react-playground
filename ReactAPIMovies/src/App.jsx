import { useState, useEffect } from "react";
import "./App.css";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [inputMovie, setInputMovie] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonfakery.com/movies/simple-paginate");
        const data = await res.json();
        setMovies(data.data);
      } catch (error) {
        console.error("Error getting data!", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addMovie = () => {
    if (!inputMovie.trim()) return;
    const newMovie = {
      id: Date.now().toString(),
      original_title: inputMovie,
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
      <MovieForm
        handleChange={(e) => {
          setInputMovie(e.target.value);
        }}
        inputValue={inputMovie}
        addMovie={addMovie}
      ></MovieForm>
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : movies.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-2xl text-primary">No Movies...</p>
        </div>
      ) : (
        <MovieList movies={movies} handleDelete={deleteMovie} handleEdit={editMovie}></MovieList>
      )}
    </>
  );
}

export default App;
