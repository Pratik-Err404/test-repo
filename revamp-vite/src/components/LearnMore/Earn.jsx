
import EarnNow from '../EarnNow'


const Earn = () => {
  return (
    <div>
      <div className='h-screen hidden lg:flex items-center justify-evenly bg-[#0A0F12] px-24'>
        <img src='https://res.cloudinary.com/dapbrn8a9/image/upload/v1723820512/Frame_1171278801_fchn65.webp' alt='placeholder' className='h-[35rem]' />
        <div className='text-center'>
          <div className='text-6xl font-bold text-white '>Earn Through <br/> Affiliate Marketing</div>
          <div className='transition-transform duration-300 hover:scale-105 hover:brightness-125 px-60 pt-5'>
            <EarnNow />
          </div>


        </div>

      </div>
      <div className='h-screen lg:hidden flex flex-col items-center justify-center bg-[#300C12]'>
      
        <div className='text-center pt-14 pb-10'>
          <div className='text-4xl font-bold text-white '>Earn Through <br/> Affiliate Marketing</div>
          <div className='transition-transform duration-300 hover:scale-105 hover:brightness-125 px-14 pt-5'>
            <EarnNow />
          </div>
        </div>
        <img src='https://res.cloudinary.com/dapbrn8a9/image/upload/v1723816915/Group_1171278424_1_hvzias.webp' alt='placeholder' className='h-[25rem]' />
      </div>
    </div>
  )
}

export default Earn