import axios from "../api/axios";
import React, { useEffect, useState } from "react";

import requests from "../api/requests";
// import Banner from "../components/Banner";
import Nav from "../components/Nav";

import Row from "../components/Row";

function RowParent() {
  const [categories, setCategories] = useState([]);
  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
    }
  };

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

      {categories.map((categorie) => (
        <Row
          onScroll={handleScroll}
          title={categorie}
          fetchURL={requests.fetchNetflixOriginals}
          categorie={categorie}
        />
      ))}
    </>
  );
}

export default RowParent;
