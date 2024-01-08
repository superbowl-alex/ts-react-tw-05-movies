import PulseLoader from 'react-spinners/PulseLoader';
import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className='flex justify-center items-center'>
      <PulseLoader
        color={'#36d7b7'}
        size={30}
        speedMultiplier={0.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
