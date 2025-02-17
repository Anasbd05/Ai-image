import React from 'react'
import Hero from './hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import About from '../about/About'
import Pricing from '../pricing/Pricing'
import Reviews from '../reviews/Reviews'
import Faqs from '../faq/Faqs'

const Home = () => {
  return (
    <div>
      <Hero/>
      <RecentImage/>
      <About/>
      <Pricing/>
      <Reviews/>
      <Faqs/>
    </div>
  )
}

export default Home
