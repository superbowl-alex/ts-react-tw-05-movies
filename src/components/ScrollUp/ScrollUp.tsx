import ScrollToTop from 'react-scroll-to-top';
import { TiArrowUpThick } from 'react-icons/ti';
import { FC } from 'react';

const ScrollUp: FC = () => {
  return (
    <div>
      <ScrollToTop style={{ border: "2px solid #05807c" }} className='flex items-center justify-center !rounded-full !bg-primaryBacground ' smooth component={<TiArrowUpThick className='w-[30px] h-[30px] fill-buttonColor'/>} />;
    </div>
  );
};

export default ScrollUp;
