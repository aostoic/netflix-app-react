import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./css/Row.css";
import { useHistory } from "react-router";

let random = 1;

function Row({ title, fetchURL, categorie }) {
  const history = useHistory();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("fetchURL", fetchURL);
      const request = await axios.post(fetchURL, {
        limit: 10,
        pageNumber: 0,
        filterByCategory: categorie,
      });

      //   https://picsum.photos/300/200"
      const moviesAux = [];
      request.data.forEach((element, index) => {
        moviesAux.push({
          ...element,
          img: `https://picsum.photos/400/250?random=${random + index}`,
        });
        random += index;
      });
      setMovies(moviesAux);
      return request;
    }
    fetchData();
  }, [categorie, fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() => history.push({ pathname: "/details", state: movie })}
            key={movie.id}
            className={`row_poster ${false && "row_poster_large"}`}
            src={movie.img}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
