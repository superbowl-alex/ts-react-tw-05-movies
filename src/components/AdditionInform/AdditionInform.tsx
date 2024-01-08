import { Outlet, Link, useLocation } from 'react-router-dom';
import { Suspense, FC } from 'react';
import Loader from '../Loader';
import { DetailMovieInfo } from '../../services/fetchMovies';


interface IAdditionInform {
  movie: DetailMovieInfo;
  state: { from: string };
}
const AdditionInform: FC<IAdditionInform> = () => {

  const location = useLocation();
  const backLinkHref: string = location.state?.from ?? '/';

  return (
    <>
      <h3 className='mb-8 text-3xl text-buttonColor'>Additional information</h3>
      <ul className='flex items-center gap-4 mb-8'>
        <li>
          <Link className='py-2 px-4 rounded no-underline text-xl text-primaryText bg-buttonColor font-medium transition-all duration-300 hover:bg-buttonHoverColor hover:shadow-md' to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link className='py-2 px-4 rounded no-underline text-xl text-primaryText bg-buttonColor font-medium transition-all duration-300 hover:bg-buttonHoverColor hover:shadow-md' to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdditionInform;
