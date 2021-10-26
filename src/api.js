import axios from "axios";

// const API = process.env.REACT_APP_TMDB_API;
const urlNetflix = process.env.REACT_APP_URLBACKEND;

const ulrRandomImg = "https://picsum.photos/400/250";
let random = 1;

export async function getMovieInformation(id) {
  let films = await axios.get(`${urlNetflix}/films/${id}`);
  films = {
    ...films,
    data: {
      ...films.data,
      img: `${ulrRandomImg}?random=${random}`,
    },
  };
  console.log(films);
  return films;
}

export async function searchMoviesBy(text, page = 1) {
  return [];
}

export async function getMoviesBy(type) {
  let discover = null;

  discover = `${urlNetflix}/films`;

  return await axios
    .post(discover, {
      limit: 18,
      pageNumber: 1,
      filterByCategory: type,
    })
    .then(function (response) {
      // console.log(response.data);

      const moviesAux = [];
      response.data.forEach((element, index) => {
        moviesAux.push({
          ...element,
          img: `${ulrRandomImg}?random=${random + index}`,
        });
        random += index;
      });
      return { name: type, films: moviesAux };
    });
}

export async function getCategories() {
  let discover = `${urlNetflix}/categories`;

  const categories = await axios.get(discover);

  return categories.data;
}
