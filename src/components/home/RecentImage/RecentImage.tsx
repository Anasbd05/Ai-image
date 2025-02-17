import SectionHeading from '@/components/helper/SectionHeading'
import React from 'react'
import ImageSlider from './ImageSlider'

const RecentImage = () => {
  return (
    <div className='py-16 bg-gray-950 '>
        <SectionHeading heading='Explore our recent images'/>
        <div className="mx-auto w-[90%] md:w-[80%] mt-16">
          <ImageSlider/>
        </div>
    </div>
  )
}

export default RecentImage
