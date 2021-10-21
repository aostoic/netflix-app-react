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

      setCategories(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      {/* <Banner /> */}

      {categories.map((categorie, index) => (
        <Row
          title={categorie}
          fetchURL={requests.fetchNetflixOriginals}
          categorie={categorie}
        />
      ))}
    </>
  );
}

export default RowParent;
