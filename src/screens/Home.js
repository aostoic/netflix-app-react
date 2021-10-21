import axios from "../api/axios";
import React, { useEffect, useState } from "react";

import requests from "../api/requests";
// import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
function RowParent() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchCategories);
      //   https://picsum.photos/300/200"

      setCategories(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <Nav />
      {/* <Banner /> */}

      {categories.map((categorie, index) => (
        <Row
          title={categorie}
          fetchURL={requests.fetchNetflixOriginals}
          categorie={categorie}
        />
      ))}
      {/* 
      {categories.forEach((element) => {
        console.log(element);
        <Row
          title="NETFLIX ORIGNALS"
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow
        />;
      })} */}
      {/* <Row
        title="NETFLIX ORIGNALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Thriller Movies" fetchURL={requests.fetchThrillerMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Animation Movies" fetchURL={requests.fetchAnimationMovies} /> */}
    </>
  );
}

export default RowParent;
