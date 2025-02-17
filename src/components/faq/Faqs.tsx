import Image from 'next/image'
import React from 'react'
import FaqCard from './FaqCard'

const Faqs = () => {
  return (
    <div className='py-16 bg-gray-950'>
        <div className="grid w-[80%] mt-16 mx-auto items-center grid-cols-1 md:grid-cols-2 gap-10">
            <div>
                <Image alt='' src={"/images/faq.png"} width={500} height={500} />
            </div>
            
            <div>
            <FaqCard/>
            </div>
        </div>


      
    </div>
  )
}

export default Faqs
