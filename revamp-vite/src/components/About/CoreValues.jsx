import React from 'react'
import Value from './Value'

const CoreValues = () => {
  return (
    <div>
      <div className="text-white text-3xl lg:text-5xl w-full text-center pt-10 ">Core Values</div>
      <div className='flex flex-col lg:flex-row gap-y-5 items-center justify-center lg:gap-x-20 pt-12'>
        <Value image={"https://res.cloudinary.com/dapbrn8a9/image/upload/v1723212561/Website_Revamp/Group_1171278422_1_drytwe.webp"} desc={"Uniqueness"} />
        <Value image={"https://res.cloudinary.com/dapbrn8a9/image/upload/v1723210682/Website_Revamp/Group_1171278420_bbnh1x.webp"} desc={"Quality over Quantity"} />
        <Value image={"https://res.cloudinary.com/dapbrn8a9/image/upload/v1723210682/Website_Revamp/Group_1171278419_mhm6fh.webp"} desc={"Authenticity"} />
        <Value image={"https://res.cloudinary.com/dapbrn8a9/image/upload/v1723210683/Website_Revamp/Group_1171278422_axjdoz.webp"} desc={"Ownership"} />
        </div>

      
    </div>
  )
}

export default CoreValues