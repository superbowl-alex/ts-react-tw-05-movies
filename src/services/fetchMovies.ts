import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY: string = '76ca17943e227c67de15be6c6d3599fa';

export interface LocationState {
  from: {
    pathname: string;
  };
}

export interface GeneralMovieInfo {
  id: number;
  original_title: string;
  poster_path: string;
  }

export interface GeneralData {
  results: GeneralMovieInfo[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface DetailMovieInfo {
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  genres: Genre[];
  release_date: string;
}

export interface Actor {
  id: number;
  original_name: string;
  character: string;
  profile_path: string;
}

export interface CastData {
  id: number;
  cast: Actor[];
}

export interface Review {
  id: number;
  author: string;
  content: string;
}

export interface ReviewsData {
  id: number;
  results: Review[];
}

export async function fetchTrendingMovies(): Promise<AxiosResponse<GeneralData>> {
  const response: AxiosResponse<GeneralData> = await axios(`/trending/movie/day?api_key=${API_KEY}`);
  return response;
}

export async function fetchSearchMovies(query: string): Promise<AxiosResponse<GeneralData>> {
  const response: AxiosResponse<GeneralData> = await axios(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response;
}

export async function fetchMovieDetails(movieId: string): Promise<AxiosResponse<DetailMovieInfo>> {
  const response: AxiosResponse<DetailMovieInfo> = await axios(`/movie/${movieId}?api_key=${API_KEY}`);
  return response;
}

export async function fetchCast(movieId: string): Promise<AxiosResponse<CastData>> {
  const response: AxiosResponse<CastData> = await axios(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response;
}

export async function fetchReviews(movieId: string): Promise<AxiosResponse<ReviewsData>> {
  const response: AxiosResponse<ReviewsData> = await axios(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response;
}
