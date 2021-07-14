import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import { get } from "../../utils/httpClient";
import { MovieCard } from "../movieCard/MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "../spinner/Spinner";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? //esta es la forma de buscar por query en esta api
        //si hay search buscamos la ruta esta + el parametro search que tenemos guardado
        //del input sino hay search buscamos todas las peliculas
        "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
