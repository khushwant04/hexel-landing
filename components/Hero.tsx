import React from 'react'
import Navbar from './Navbar'
import { FlipWordsHero } from './FlipWords'

const Hero = () => {
  return (
    <div className='text-white w-full min-h-screen
      px-4         /* Mobile padding */
      sm:px-6      /* Small screens */
      md:px-12     /* Medium screens */
      lg:px-16     /* Large screens */
      xl:px-56     /* Extra large screens */
    '>
      {/* Fixed Navbar */}
      <div className='fixed top-0 left-56 right-56 z-50 bg-black'>
        <Navbar />
      </div>

      {/* Main content with padding-top to account for fixed navbar */}
      <div className='container mx-auto pt-14'> {/* pt-14 matches navbar height */}
        <div className='flex flex-col items-center justify-center 
          pt-8          /* Mobile top padding */
          sm:pt-12     /* Small screens */
          md:pt-16     /* Medium screens */
          lg:pt-20     /* Large screens */
        '>
          <FlipWordsHero />
        </div>
      </div>
    </div>
  )
}

export default Hero