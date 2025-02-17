"use client"
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3 ,
      slidesToSlide : 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2,
      slidesToSlide : 1
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide : 1
    }
  };


const ImageSlider = () => {
  return (
      <Carousel
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        >
            {["r1.jpg","r2.jpg" ,"r3.jpg" ,"r4.jpg" ,"r5.jpg","r6.jpg",].map((image , index)=>(
                <div className='p-4' key={index}>
                    <div className="relative h-[400px]">
                        <Image src={`/images/${image}`}
                        alt='' className='object-cover rounded-md' fill />
                    </div>
                </div>
            ))}

    </Carousel>
  )
}

export default ImageSlider
