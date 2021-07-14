import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  console.log(imageUrl);
  return (
    //de moviesgrid le paso como params la movie y esta es la vista individual de una pelicula
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={180}
          height={285}
          className={styles.movieImage}
          src={
            imageUrl === "https://image.tmdb.org/t/p/w300null"
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sin_foto.svg/768px-Sin_foto.svg.png"
              : imageUrl
          }
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
