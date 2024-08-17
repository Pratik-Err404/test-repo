

import DownloadButton from '../DownloadButton'

const HeroSection = () => {
  return (
    <div>
      <div className='h-screen  lg:flex  justify-center bg-[#0A0F12] hidden'>
        <div className='z-10 flex flex-col items-center'>
          <div className='text-white  pt-10 text-5xl font-semibold '>Social Fun-Hub!</div>
          <li className='transition-transform duration-300 hover:scale-105 hover:brightness-125'>
            <DownloadButton />
          </li>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute w-2/3 h-auto pt-28 pe-3"
        >
          <source src="https://res.cloudinary.com/dapbrn8a9/video/upload/v1723812972/after_effects_final_website_n79wdg.mp4" type="video/mp4" />
        </video>

      </div>
      <div>
        <div className='lg:hidden flex flex-col items-center  h-screen bg-[#0A0F12]'>
          <div className='z-10 pt-10'>
          <div className='text-white text-5xl  text-center font-semibold '>Social Fun-Hub!</div>
          <li className='transition-transform duration-300 hover:scale-105 hover:brightness-125 px-20 pt-1'>
            <DownloadButton />
          </li>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute w-2/3 pt-56 "
          >
            <source src="https://res.cloudinary.com/dapbrn8a9/video/upload/v1723815938/after_effects_final_mobile_jazt8j.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  )
}

export default HeroSection
