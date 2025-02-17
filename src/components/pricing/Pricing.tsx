import {Check} from 'lucide-react'
import React from 'react'
import PriceCard from './PriceCard'

const Pricing = () => {
  return (
    <div className='py-16 bg-gray-950'>
        <div className="w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
            {/* content */}
            <div>
                <h1 className='uppercase text-white mb-6 font-bold tracking-wide'>Flexible && affortable</h1>
                <h1 className='text-xl md:text-4xl lg:text-5xl font-bold mb-6 text-white '>Our pricing plans</h1>
                <p className='text-gray-100 font-medium my-2 text-opacity-85 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus a non distinctio dolor ea dolorem odio.</p>

                <div className="mt-8">
                    <div className="flex items-center space-x-3 mb-3">
                        <Check className='text-green-500 w-6 h-6'/>
                        <p className='text-lg font-semibold text-gray-100 tracking-wider text-opacity-90 '>High Quality Services</p>
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                        <Check className='text-green-500 w-6 h-6'/>
                        <p className='text-lg font-semibold text-gray-100 tracking-wider text-opacity-90 '>24/7 Customer support</p>
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                        <Check className='text-green-500 w-6 h-6'/>
                        <p className='text-lg font-semibold text-gray-100 tracking-wider text-opacity-90 '>Affordable Rates</p>
                    </div>
                </div>
            </div>
            {/* price cards */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <PriceCard price="4" user="1" type="Silver Pack" />
                </div>
                <div>
                    <PriceCard price="8" user="2" type="Golden Pack" />
                </div>
            </div>

        </div>      
    </div>
  )
}

export default Pricing
