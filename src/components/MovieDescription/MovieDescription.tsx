import { FC } from 'react';
import { DetailMovieInfo } from '../../services/fetchMovies'



interface IMovieDescription {
  movie: DetailMovieInfo;
}

const MovieDescription: FC<IMovieDescription> = ({movie}) => {
  const {original_title, overview, vote_average, genres, release_date} = movie;

  const userScore: string = `${Math.round(vote_average * 10)} %`;
  const movieRelease: number = new Date(release_date).getFullYear();

  return (
    <div className='flex flex-col gap-4 text-2xl text-secondaryText'>
      <h2 className='text-buttonColor'>
        {original_title} ({movieRelease || 'Release date unknown'})
      </h2>
      <h3 className='text-buttonColor'>User score: {userScore}</h3>
      <div>
        <h3 className='text-buttonColor'>Overview</h3>
        <div>{overview}</div>
      </div>
      <div>
        <h3 className='text-buttonColor'>Genres</h3>
        {genres.length > 0 ? (
          <div>{genres.map(({ name }) => name).join(', ')}</div>
        ) : (
          <div>{'No data'}</div>
        )}
      </div>
    </div>
  );
};

export default MovieDescription;
