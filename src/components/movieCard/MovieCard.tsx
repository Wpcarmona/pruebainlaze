import React from 'react';
import styles from './movieCard.module.css';
import { Movie } from '../../types/movies';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className={styles.card}>
      <Link href={`/movies/${movie.id}`}>
        <img src={imageUrl} alt={movie.title} className={styles.poster} />
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.releaseDate}>Fecha de estreno: {movie.release_date}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
