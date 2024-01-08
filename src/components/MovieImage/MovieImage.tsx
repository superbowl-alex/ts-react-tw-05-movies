import { BsFileImage } from 'react-icons/bs';
import { GeneralMovieInfo } from '../../services/fetchMovies'

import { FC } from 'react';

interface IMovieImage {
  movie: GeneralMovieInfo;
}

const MovieImage: FC<IMovieImage> = ({ movie}) => {
  const {original_title, poster_path} = movie;

  return (
    <>
      {poster_path ? (
        <img className='block w-[300px] h-auto mr-8 rounded-lg shadow-md'
          src={`https://www.themoviedb.org/t/p/w300${poster_path}`}
          alt={original_title}
          loading="lazy"
        />
      ) : (
        <div className='mr-8'>
          <BsFileImage className='fill-secondaryBacground' size={300} />
        </div>
      )}
    </>
  );
};

export default MovieImage;
