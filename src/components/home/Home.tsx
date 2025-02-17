import React from 'react'
import Hero from './hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import About from '../about/About'
import Pricing from '../pricing/Pricing'

const Home = () => {
  return (
    <div>
      <Hero/>
      <RecentImage/>
      <About/>
      <Pricing/>
    </div>
  )
}

export default Home
