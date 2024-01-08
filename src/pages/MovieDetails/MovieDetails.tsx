import { useState, useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { fetchMovieDetails, DetailMovieInfo } from '../../services/fetchMovies';
import MovieDescription from '../../components/MovieDescription';
import MovieImage from '../../components/MovieImage';
import AdditionInform from '../../components/AdditionInform';

const MovieDetails: FC = () => {
  const { movieId } = useParams<{movieId?: string}>();
  const [movie, setMovie] = useState<DetailMovieInfo>();
  const location = useLocation();

  const backLinkHref: string = location.state?.from ?? '/';

  useEffect(() => {
    async function fetch(): Promise<void> {
      try {
        if(!movieId) return;
        const response: AxiosResponse<DetailMovieInfo> = await fetchMovieDetails(movieId);
        const film: DetailMovieInfo = response.data;
        setMovie(film);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <main>
      <Link className='inline-block py-2 px-4 mb-8 rounded no-underline text-xl text-primaryText bg-buttonColor font-medium transition-all duration-300 hover:bg-buttonHoverColor hover:shadow-md' to={backLinkHref}>Go back</Link>
      <div className='flex items-start mb-8'>
        <MovieImage movie={movie} />
        <MovieDescription movie={movie} />
      </div>
      <AdditionInform movie={movie} state={{ from: backLinkHref }} />
    </main>
  );
};

export default MovieDetails;
