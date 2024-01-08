import { Routes, Route, Navigate } from 'react-router-dom';
import React, {useEffect, FC } from 'react';
import OnlyScroll from 'only-scrollbar';
import SharedLayout from '../SharedLayout';

const Home = React.lazy(() => import('../../pages/Home'));
const Movies = React.lazy(() => import('../../pages/Movies'));
const MovieDetails = React.lazy(() => import('../../pages/MovieDetails'));
const Cast = React.lazy(() => import('../Cast'));
const Reviews = React.lazy(() => import('../Reviews'));

const App: FC = () => {

  useEffect(() => {
    new OnlyScroll(document.scrollingElement, {
      damping: 0.8,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
