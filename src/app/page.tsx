'use client';

import React, { useEffect, useState } from 'react';
import MovieDetail from './movieDetails/MovieDetails';
import MovieListPage from './movies/MovieListPage';
import { Movie, MovieResponse } from '../types/movieTypes';
import Auth from './auth/Auth';


export default function Home() {

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  if (selectedMovie) {
    return <MovieDetail movie={selectedMovie} onBack={() => setSelectedMovie(null)} />;
  }

  return (
    <div>
      <Auth/>
      <MovieListPage onMovieClick={(movie) => setSelectedMovie(movie)}/>
    </div>
  );
}
