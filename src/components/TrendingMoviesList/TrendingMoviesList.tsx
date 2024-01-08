import { useState, useEffect, FC } from 'react';
import { AxiosResponse } from 'axios';
import { fetchTrendingMovies, GeneralData, GeneralMovieInfo } from '../../services/fetchMovies';
import MovieCard from '../MovieCard';
import ErrorMessage from '../ErrorMessage';

const TrendingMoviesList: FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<GeneralMovieInfo[]>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetch() {
      try {
        const response: AxiosResponse<GeneralData> = await fetchTrendingMovies();
        const movies: GeneralMovieInfo[] = response.data.results;
        setTrendingMovies(movies);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetch();
  }, []);

  if (!trendingMovies) {
    return null;
  }

  return (
    <>
      {error && <ErrorMessage />}
      <ul className='grid max-w-calc-vw-48 grid-cols-auto-fill-minmax gap-4 my-0 p-0 list-none mx-auto'>
        {trendingMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default TrendingMoviesList;
