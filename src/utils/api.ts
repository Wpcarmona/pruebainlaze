import { Movie } from '../types/movies';

const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies(page: number): Promise<{ results: Movie[] }> {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=${page}`);
  return await res.json();
}

export async function getMovieDetails(id: string): Promise<Movie> {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
  return await res.json();
}

export async function searchMovies(query: string): Promise<Movie[]> {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`);
    const data = await res.json();
    return data.results;
}
  
export async function fetchPopularMovies(): Promise<Movie[]> {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${process.env.API_KEY}`);
    if (!res.ok) {
      throw new Error('Failed to fetch popular movies');
    }
    const data = await res.json();
    return data.results;
}