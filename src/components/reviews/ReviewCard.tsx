import {QuoteIcon} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
    image : string ,
    name : string ,
    role  : string
}

const ReviewCard = ({image , name , role} : Props) => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <QuoteIcon className='w-10 h-10 text-yellow-400' />
      <p className='text-center mt-4 text-white md:text-lg lg:text-xl font-semibold text-opacity-80 '>Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. adipisicing elit. Libero repudiandae porro omnis. Mollitia tempora magni deleniti!</p>
        <div className='mt-8'>
            <h1 className='md:text-2xl font-bold text-center'>{name}</h1>
            <p className='text-sm md:text-lg font-bold text-center '>{role}</p>
            <Image src={image} width={80} height={80} className='rounded-full mt-6 p-1 bg-yellow-400 mx-auto' alt=''/>
        </div>
    </div>
  )
}

export default ReviewCard
