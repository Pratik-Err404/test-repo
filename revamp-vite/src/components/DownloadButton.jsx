

const DownloadButton = () => {
  return (
    <div className='border-2  py-[0.35rem] px-3 rounded-3xl flex items-center justify-center gap-x-3 hover:bg-red-600 hover:border-red-600 '>
      <p className='text-white'>Download Now</p>
      <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1723446112/Vector_1_z58kzw.webp" alt="Apple" className='h-5' />
      <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1723446112/Vector_2_caqes2.webp" alt="GooglePlay" className='h-5'/>
      </div>
  )
}

export default DownloadButton