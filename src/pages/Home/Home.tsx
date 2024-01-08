import { FC } from 'react';
import TrendingMoviesList from '../../components/TrendingMoviesList';

const Home: FC = () => {
  return (
    <main>
      <h1 className='mb-8 text-secondaryText text-5xl text-center font-bold'>Trending today</h1>
      <TrendingMoviesList />
    </main>
  );
};

export default Home;
