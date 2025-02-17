import React from 'react'

type Props = {
    price: string ,
    type :string,
    user : string
}

const PriceCard = ({price , type , user} : Props ) => {
  return (
    <div className='bg-black p-8 rounded-lg shadow-md shadow-gray-700 text-center'>
      <p className='mt-12 mb-2 tracking-wider text-3xl text-white font-semibold'>{type}</p>
      <p className='text-xs  py-1'>Great for private individuals</p>

      <h1 className='text-4xl py-8 font-semibold'>${price}<span className='font-normal text-2xl'>/mo</span></h1>
      
      <div className='mt-8 space-y-3 text-opacity-50'>
        <p>{user} User</p>
        <p>Unlimited Projects</p>
        <p>Download Prototypes</p>
      </div>

      <div className="mt-6">
        <button className='bg-gray-100 text-black  rounded-md py-2 px-8 font-semibold hover:opacity-85'>Get Now</button>
      </div>

    </div>
  )
}

export default PriceCard
