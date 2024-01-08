import { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { fetchCast, Actor, CastData } from '../../services/fetchMovies';
import { IoIosPerson } from 'react-icons/io';
import ErrorMessage from '../ErrorMessage';

const Cast: FC = () => {
  const { movieId } = useParams<{movieId?: string}>();
  const [cast, setCast] = useState<Actor[]>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetch(): Promise<void> {
      if(!movieId) return;
      try {
        const response: AxiosResponse<CastData> = await fetchCast(movieId);
        const movieCast: Actor[] = response.data.cast;
        setCast(movieCast);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);

  useEffect(() => {
    window.scroll({
      top: 570,
      left: 0,
      behavior: 'smooth',
    });
  }, [cast]);

  if (!cast) {
    return null;
  }
  if (cast.length === 0) {
    return (
      <div>
        Sorry, but we have no information about the actors of this movie.
      </div>
    );
  } else {
    return (
      <>
        {error && <ErrorMessage />}
        <div className='max-w-calc-vw-48 grid grid-cols-cast-template gap-4 my-0 p-0 mx-auto'>
          {cast.map(({ id, original_name, character, profile_path }) => (
            <div className='flex flex-col items-start rounded-lg overflow-hidden shadow-md h-full transition-all duration-300 hover:scale-[1.02]' key={id}>
              {profile_path ? (
                <img className='w-full h-auto object-cover'
                  src={`https://www.themoviedb.org/t/p/w200${profile_path}`}
                  alt={original_name}
                  loading="lazy"
                />
              ) : (
                <IoIosPerson className='w-full mt-[70px] object-cover fill-secondaryBacground' size={230}/>
              )}

              <div className='mt-auto p-2 text-xl text-secondaryText'>{original_name}</div>
              <div className='p-2 text-xl text-secondaryText'>Character: {character}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Cast;
