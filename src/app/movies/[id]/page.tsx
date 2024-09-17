import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../../utils/api';
import MovieDetails from '../../../components/movieDatail/MovieDetail';
import { Movie } from '../../../types/movies';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      const movieData = await getMovieDetails('id');
      setMovie(movieData);
    }
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Cargando...</p>;

  return <MovieDetails movie={movie} />;
};

export default MovieDetailPage;
