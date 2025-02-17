import React from 'react'

type Props= {
    heading: string
}

const SectionHeading = ({heading} : Props) => {
  return (
    <div className='w-[80%] mx-auto'>
      <h1 className='text-2xl lg:text-3xl font-bold text-white'>{heading}</h1>
      <p className='text-sm sm:text-base md:text-lg font-medium mt-2 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eius.</p>
    </div>
  )
}

export default SectionHeading
