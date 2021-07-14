import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../../hooks/useQuery";

export function Search({ data }) {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();
  //el useHistory me permite añadirle un nuevo elemento a la ruta
  //tiene path /search / hash/ state /key , usamos el search
  //usamos el hook nos traemos la funcion, la ejecutamos  y la palabra clave que queremos
  //buscar la ponemos   const search = query.get("search") o const clave = query.get("clave");

  //si hay search se setea el searchText sino se pone el default las comillas vacias
  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
    if (!searchText) {
      return setError("ingrese un nombre Valido");
    }
    setError("");
    setSearchText("");
  };

  return (
    <>
      <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            //vamos a setear el estado  del search con el valor que tomo en el value del input
          />
          <button className={styles.searchButton} type="submit">
            <FaSearch size={20} />
          </button>
        </div>
      </form>
      {error ? (
        <div className={styles.errors}>
          <h1>{error}</h1>
        </div>
      ) : null}
    </>
  );
}
