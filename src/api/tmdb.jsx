const BASE_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_URL

export const fetchPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`);
  const data = await response.json();
  return data.results;
};

export const fetchGenreMovies = async (genreId) => {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=ko-KR`);
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,reviews&language=ko-KR`);
  const data = await response.json();
  return data;
};

export const fetchSearchResults = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`);
  const data = await response.json();
  return data.results;
};

export default fetchPopularMovies;
