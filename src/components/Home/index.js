import React, { useEffect, useState, useContext } from "react";
import { getMoviesBy, getCategories } from "../../api";
import Slider from "../Slider";
import Search from "../Search";
import SearchContext from "../Search/context";

function Home() {
  const [categoriesWithfilms, setCategoriesWithfilms] = useState([]);

  const searchContext = useContext(SearchContext);

  const fetchMovies = async () => {
    let categories = await getCategories();

    const promise = [];
    categories.forEach((element) => {
      promise.push(getMoviesBy(element));
    });

    const responsePromise = await Promise.all(promise);
    setCategoriesWithfilms(responsePromise);

    return {
      categories,
      categoriesWithfilms,
    };
  };

  useEffect(() => {
    async function fetchData() {
      fetchMovies();
    }
    fetchData();
  }, []);

  return (
    <div>
      {searchContext.searchInput.length > 0 ? (
        <Search />
      ) : (
        <div>
          {categoriesWithfilms.length > 0 &&
            categoriesWithfilms.map((categorie) => (
              <Slider
                key={categorie.name}
                mainTitle={categorie.name}
                data={categorie.films}
                poster={false}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
