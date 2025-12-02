import Button from "./Button";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function MovieList({ movies, handleDelete, handleEdit }) {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xl opacity-60 tracking-wide text-center">Movies</li>
      {movies.map((movie) => {
        return (
          <li className="list-row flex items-start" key={movie.id}>
            {/* Imagem */}
            <div className="w-40">
              {movie.poster_path ? (
                <img className="size-fit rounded-box" src={movie.poster_path} alt={movie.original_title} />
              ) : (
                "N/A"
              )}
            </div>
            {/* Conteúdo */}
            <div className="flex-1 flex flex-col ml-2">
              <div className="font-bold text-xl">{movie.original_title}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Release Year: {movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"}
              </div>
              {movie.overview ? (
                <div className="font-bold text-l mt-2">
                  Overview
                  <p className="text-s font-semibold mt-1">{movie.overview}</p>
                </div>
              ) : (
                "N/A"
              )}
              {movie.casts && movie.casts.length > 0 && (
                <div className="font-bold text-l mt-5">
                  Casts
                  <p className="text-s font-semibold mt-1">{movie.casts.map((actor) => actor.name).join(", ")} </p>
                </div>
              )}
            </div>
            <div className="flex gap-2 ml-2">
              <Button className="btn btn-square btn-ghost text-red-500" handleClick={() => handleDelete(movie.id)}>
                <FaTrash className="h-5 w-4" />
              </Button>
              <Button
                className="btn btn-square btn-ghost text-blue-500"
                handleClick={() => handleEdit(movie.id, movie.original_title)}
              >
                <FaEdit className="h-5 w-4" />
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
