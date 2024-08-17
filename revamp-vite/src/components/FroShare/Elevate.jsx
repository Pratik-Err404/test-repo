import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import ReactGA from 'react-ga4';
import "../../styles/elevate.css";


const Elevate = React.memo(() => {
  const Download = useCallback(() => {
    window.open("https://froker.app.link/");
    ReactGA.event('event', 'Froshare_Elevate', {
      category: 'Blog',
      action: 'User Reached Middle',
    });
  }, []);

  const image2 = "https://res.cloudinary.com/dapbrn8a9/image/upload/v1723030656/Website_Revamp/Group_1171277300_7_yoq9sn.webp";
  const image1 = "https://res.cloudinary.com/dapbrn8a9/image/upload/v1723030663/Website_Revamp/Group_1171277300_8_vnwx5t.webp";

  return (
    <div className='w-full h-full md:h-screen relative bg-black  '>
      <Helmet>
        <link rel="preload" fetchPriority='high' as="image" href={image1} />
        <link rel="preload" fetchPriority='high' as="image" href={image2} />
      </Helmet>

      <div className='flex flex-col w-full h-full md:flex-row justify-center items-center relative bg-black overflow-hidden'>
        <div className='md:hidden block w-100 h-100 absolute bottom-0 mt-52'>
          <img src={image1} className='w-full h-full object-cover' fetchPriority='high' alt='Froshare mobile of this section' loading="lazy" />
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center md:w-1/2 p-5'>
          <div className='md:pl-10 md:w-[90%] md:h-1/2 flex flex-col justify-center items-center md:justify-start md:items-start'>
            <div className='pr-2 mt-5 flex font-Gilroy font-bold text-2xl md:text-4xl lg:text-7xl text-white'>
              Elevate your
            </div>
            <div className="pr-2 md:pt-4 text-[#C30010] font-Gilroy font-semibold md:font-bold text-md md:text-lg lg:text-3xl">
              <div className="flex items-center">
                <div className="word animate-slide-in opacity-0 delay-0">Create</div>
                <div className="arrow animate-slide-in opacity-0 delay-1"><MdKeyboardDoubleArrowRight /></div>
                <div className="word animate-slide-in opacity-0 delay-2">Conntect</div>
                <div className="arrow animate-slide-in opacity-0 delay-3"><MdKeyboardDoubleArrowRight /></div>
                <div className="word animate-slide-in opacity-0 delay-4">Earn</div>
              </div>
            </div>
            <div className='pl-6 pr-6 mt-1 md:pl-0 md:pr-0 w-3/4 md:pt-5 text-center md:text-justify leading-loose font-Gilroy font-medium text-md md:text-lg lg:text-xl text-white'>
              Connect with top brands, expand reach & earn big!
            </div>
            <div className='text-center pt-1 md:text-justify leading-loose font-Gilroy font-medium text-md md:text-lg lg:text-xl text-white'>
              Simplify posting & sharing links with Froshare
            </div>
            <div onClick={Download} className='cursor-pointer mt-2 w-[10rem] h-[2rem] md:mt-3 md:w-[12rem] md:h-[3rem] lg:w-[17rem] lg:h-[3.5rem] bg-[#C30010] flex justify-center items-center rounded-full'>
              <div className='text-center text-[#fff] font-Gilroy font-medium text-md md:text-lg lg:text-xl '>
                Get Started
              </div>
            </div>
            <div className='pb-[32rem] md:pb-0'></div>
          </div>
        </div>
        <div className='hidden md:block w-full md:w-1/2 h-full'>
          <img src={image2} className='w-full h-[40rem] scale-125 object-contain' fetchPriority='high' alt='Froshare mobile of this section' loading="lazy" />
        </div>
      </div>
    </div>
  );
});

export default Elevate;
