import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const ElevateText = ({Download}) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center md:w-1/2 p-5'>
          <div className='md:pl-10 md:w-[90%] md:h-1/2 flex flex-col justify-center items-center md:justify-start md:items-start'>
            <div className='pr-2 mt-5 flex font-Gilroy font-bold text-2xl md:text-4xl lg:text-7xl text-white'>
              Elevate your
            </div>
            <div className="pr-2 md:pt-4 text-[#C30010] font-Gilroy font-semibold md:font-bold text-md md:text-lg lg:text-3xl">
              <div className="flex items-center">
                <div className="word animate-slide-in opacity-0 delay-0">Influence</div>
                <div className="arrow animate-slide-in opacity-0 delay-1"><MdKeyboardDoubleArrowRight /></div>
                <div className="word animate-slide-in opacity-0 delay-2">Connection</div>
                <div className="arrow animate-slide-in opacity-0 delay-3"><MdKeyboardDoubleArrowRight /></div>
                <div className="word animate-slide-in opacity-0 delay-4">Earning!!</div>
              </div>
            </div>
            <div className='pl-6 pr-6 mt-1 md:pl-0 md:pr-0 w-3/4 md:pt-5 text-center md:text-justify leading-loose font-Gilroy font-medium text-md md:text-lg lg:text-xl text-white'>
              Connect with top brands, expand reach & earn big!
            </div>
            <div className='text-center pt-1 md:text-justify leading-loose font-Gilroy font-medium text-md md:text-lg lg:text-xl text-white'>
              Simplify posting & sharing links with Froshare
            </div>
            <div onClick={Download} className='cursor-pointer mt-4 w-[10rem] h-[2.6rem] md:mt-5 md:w-[12rem] md:h-[3.4rem] lg:w-[17rem] lg:h-[4rem] bg-[#C30010] flex justify-center items-center rounded-full'>
              <div className='text-center text-[#fff] font-Gilroy font-medium text-md md:text-lg lg:text-xl pt-2 pb-2'>
                Get Started
              </div>
              <FaArrowRightLong className='pl-2 size-6 md:size-8' color='white' />
            </div>
            <div className='pb-[32rem] md:pb-0'></div>
          </div>
        </div>
  )
}

export default ElevateText