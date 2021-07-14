import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../../components/spinner/Spinner";
import { get } from "../../utils/httpClient";
import styles from "./MovieDetails.module.css";

//esta es la vista de los detalles de un pelicula voy a usar use params para recoger el id del pelicula
export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      //guardamos la data en movie
      setIsLoading(false);
    });
  }, [movieId]);
  //aca pasamos como dependencia la movieId para que se ejecute el useEffect cada vez que se modifique esa busqueda
  console.log(movie);
  if (isLoading) {
    return <Spinner />;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
