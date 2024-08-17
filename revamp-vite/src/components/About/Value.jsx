import React from 'react'

const Value = ({image, desc}) => {
  return (
    <div className='flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:brightness-125 '>
      <img src={image} alt="name" className='h-24 lg:h-30'/>
      <div className='text-white text-2xl lg:text-3xl pt-4'>{desc}</div>
    </div>
  )
}

export default Value
