import { useLocation, NavLink } from 'react-router-dom';
import { BsFileImage } from 'react-icons/bs';
import { GeneralMovieInfo } from '../../services/fetchMovies'
import { FC } from 'react';

interface IMovieCardProps {
  movie: GeneralMovieInfo;
}

const MovieCard: FC<IMovieCardProps> = ({movie}) => {
  const {id, original_title, poster_path} = movie;
  const location = useLocation();
  const currentLocation: string = '/movies';


  return (
    <li className='rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.02]'>
      <NavLink className='h-full flex flex-col items-start' to={`${currentLocation}/${id}`} state={{ from: location }}>
        {poster_path ? (
          <img className='w-full object-cover'
            src={`https://www.themoviedb.org/t/p/w300${poster_path}`}
            alt={original_title}
            loading="lazy"
          />
        ) : (
          <BsFileImage className='w-full object-cover fill-secondaryBacground' size={400} />
        )}
        <div className='p-2 text-secondaryText text-2xl'> {original_title}</div>
      </NavLink>
    </li>
  );
};

export default MovieCard;
