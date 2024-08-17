
import ExploreNowButton from '../ExploreNow'


const ExploreNow = () => {
  return (
    <div>
      <div className='h-screen hidden lg:flex items-center justify-evenly bg-[#0A0F12] px-24'>
        <img src='https://res.cloudinary.com/dapbrn8a9/image/upload/v1723816915/Group_1171278424_1_hvzias.webp' alt='placeholder' className='h-[35rem]' />
        <div className='text-center'>
          <div className='text-6xl font-bold text-white '>Score High Be at The Top</div>
          <div className='text-5xl font-semibold text-white pt-3'>Explore The New Social <br /> Fun With Your Friends</div>
          <div className='text-2xl font-semibold text-white pt-3'>More Score = More Discoverability!</div>
          <div className='transition-transform duration-300 hover:scale-105 hover:brightness-125 px-60 pt-5'>
            <ExploreNowButton />
          </div>


        </div>

      </div>
      <div className='h-screen lg:hidden flex flex-col items-center justify-center bg-[#300C12]'>
      
        <div className='text-center pt-14 pb-10'>
          <div className='text-2xl font-bold text-white '>Score High Be at The Top</div>
          <div className='text-xl font-semibold text-white pt-3'>Explore The New Social <br /> Fun With Your Friends</div>
          <div className='text-xl font-semibold text-white pt-3'>More Score = More Discoverability!</div>
          <div className='transition-transform duration-300 hover:scale-105 hover:brightness-125 px-14 pt-5'>
            <ExploreNowButton />
          </div>
        </div>
        <img src='https://res.cloudinary.com/dapbrn8a9/image/upload/v1723816915/Group_1171278424_1_hvzias.webp' alt='placeholder' className='h-[25rem]' />
      </div>
    </div>
  )
}

export default ExploreNow