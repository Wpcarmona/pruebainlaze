// src/utils/api.ts

import axios from 'axios';
import { Movie, MovieResponse } from '../types/movieTypes';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY; 

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json'
  },
  params: {
    language: 'en-EN'
  },
});

export async function getMoviesByPath(page: number, path:string): Promise<MovieResponse> {
  try {
    const response = await api.get(`/movie/${path}`, {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
}

export async function getMovieDetails(id: string): Promise<Movie> {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for movie ${id}:`, error);
    throw error;
  }
}

export async function searchMovies(query: string): Promise<Movie[]> {
  try {
    const response = await api.get('/search/movie', {
      params: {
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching for movies:', error);
    throw error;
  }
}

