import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='py-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
        <div className="order-2  xl:order-1">
        <Image alt="" width={400} height={400} className='rounded-lg w-full' src={"/images/about.jpg"} />
        </div>

        <div className="order-1 xl:order-2">
          <h1 className='text-gray-400 mb-4 font-semibold text-lg capitalize'>What we do</h1>
          <h2 className='text-3xl sm:text-4xl tracking-wider md:text-5xl font-bold text-white'>Create your own ai business</h2>
          <p className='text-gray-200 my-8 leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat aspernatur odio natus dolorum dolores maiores pariatur doloremque. Nesciunt, quisquam molestias! Voluptates sequi, totam maxime, iste voluptatem doloremque deserunt quia commodi error possimus nobis harum?</p>
          <button className='bg-cyan-700 w-36 py-2 hover:opacity-90 uppercase rounded-md '>About us</button>
        </div>
      </div>
    </div>
  )
}

export default About
