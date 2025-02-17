import {Navlinks} from '@/constant/constant'
import {MenuIcon, SearchIcon, ShoppingCartIcon} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center border-b border-gray-300 my-4 py-2 justify-between px-10 w-full '>
      {/* logo */}
        <h1 className='text-3xl font-bold '>IMGAI</h1>
        <div className='md:flex items-center gap-8 hidden ' >
        {Navlinks.map((link)=>(
          <Link className='relative text-white  hover:underline decoration-2  underline-offset-4 decoration-yellow-400' href={link.url} key={link.id}>
            <p>{link.label}</p>
          </Link>
        ))}
        </div>

        <div className='flex items-center space-x-5 md:space-x-3'>
            <ShoppingCartIcon className='cursor-pointer w-6 h-6'/>
            <SearchIcon className='cursor-pointer w-6 h-6'/>
            <MenuIcon className='cursor-pointer w-6 h-6 flex md:hidden '/>
        </div>
    </nav>
  )
}

export default Navbar
