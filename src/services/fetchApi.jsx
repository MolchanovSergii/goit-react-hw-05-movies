import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f6352dcc8bb6548bb49d551f5d46c756';

export async function fetchApi() {
  const END_POINTS = 'trending/movie/day';
  const response = await axios.get(
    `${END_POINTS}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchApiMovie(movieId) {
  const END_POINTS = `movie/${movieId}`;
  const response = await axios.get(
    `${END_POINTS}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}
