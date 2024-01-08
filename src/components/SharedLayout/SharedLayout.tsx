import { FC } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import ScrollUp from '../ScrollUp';
import Loader from '../Loader';
import Logo from '../../images/logo-film.png';

const SharedLayout: FC = () => {
  return (
    <div>
      <header className='sticky top-0 left-0 z-[1100] py-4 px-16 bg-secondaryBacground text-primaryText shadow-md'>
        <nav className='flex justify-between items-center'>
          <Link className='flex justify-center items-center gap-4 text-3xl text-inherit hover:text-primaryBacground' to="/">
            <img className='w-[32px]' src={Logo} alt="logo" />
            <span>Movie Time</span>
          </Link>
          <ul className='flex justify-between items-center gap-4'>
            <li>
              <NavLink className='py-2 px-4 rounded no-underline text-xl text-primaryText bg-buttonColor font-medium active:text-secondaryText active:bg-primaryBacground hover:bg-buttonHoverColor hover:shadow-md' to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='py-2 px-4 rounded no-underline text-xl text-primaryText bg-buttonColor font-medium active:text-secondaryText active:bg-primaryBacground hover:bg-buttonHoverColor hover:shadow-md' to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className='p-8'>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <ScrollUp />
    </div>
  );
};

export default SharedLayout;
