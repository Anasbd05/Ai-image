import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-4 bg-black'>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-start pb-4 border-b-2 border-gray-900 space-y-6 sm:space-y-0">
        {/* 1st part */}

        <div className="col-span-2">
          <p className='text-2xl sm:text-3xl md:text-4xl w-[80%] font-bold '>We develop && create digital future</p>
        </div>

{/* 2 art */}
      <div>
        <h1 className='text-xl font-bold '>Address</h1>
        <p className='opacity-60 mt-4 mb-2'>Tangail</p>
        <p className='opacity-60'>Morocco</p>
      </div>

      {/* 3 part */}
      <div>
        <h1 className='text-xl font-bold '>Contact</h1>
        <p className='opacity-60 mt-4 mb-2'>Email</p>
        <p className='opacity-85 hover:underline underline-offset-2'>anastrying05@gmail.com</p>
        <p className='opacity-60 mt-4 mb-2'>Phone</p>
        <p className='opacity-85 hover:underline underline-offset-2'>+212 672-837-232</p>
      </div>

      </div>
      <p className='text-center mt-4'>&copy; Copyright 2025 , All rights are reserved </p>
    </div>
  )
}

export default Footer
