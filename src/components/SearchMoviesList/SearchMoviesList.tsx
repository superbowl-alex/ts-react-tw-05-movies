import { FC } from 'react';
import MovieCard from '../MovieCard';
import { GeneralMovieInfo } from '../../services/fetchMovies'


interface ISearchMoviesList {
  movies: GeneralMovieInfo[];
}

const SearchMoviesList: FC<ISearchMoviesList> = ({ movies }) => {
  return (
    <ul className='grid max-w-calc-vw-48 grid-cols-auto-fill-minmax gap-4 my-0 p-0 list-none mx-auto'>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default SearchMoviesList;
