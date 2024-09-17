import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../utils/api';
import MovieCard from '../../components/movieCard/MovieCard';
import Pagination from '../../components/pagination/Pagination';
import { Movie } from '../../types/movies';

const MovieListPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await getPopularMovies(page);
      setMovies(moviesData.results);
    }
    fetchMovies();
  }, [page]);

  return (
    <div>
      <h1>Películas Populares</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={(p) => setPage(p)} />
    </div>
  );
};

export default MovieListPage;
