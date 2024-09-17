import React, { useState, useEffect } from 'react';
import {MovieCard} from '../components/index';
import { Movie } from '../types/movies';
import { fetchPopularMovies } from '../utils/api';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) {
    return <p>Cargando películas...</p>;
  }

  return (
    <div>
      <h1>Películas Populares</h1>
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No se encontraron películas.</p>
        )}
      </div>
    </div>
  );
}
