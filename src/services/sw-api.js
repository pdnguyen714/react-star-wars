const BASE_URL = "https://swapi.dev/api/";

const getStarships = () => {
  return fetch(`${BASE_URL}starships`).then((res) => res.json());
};

export default getStarships;