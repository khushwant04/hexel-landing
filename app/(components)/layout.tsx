import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({ Children }: { Children :React.ReactNode}) => {
  return (
      <div className='text-white w-full min-h-screen'>
          {/* Fixed Navbar with matching padding */}
          <div className='fixed top-0 left-0 right-0 z-50 bg-black
        px-4         /* Mobile padding */
        sm:px-6      /* Small screens */
        md:px-12     /* Medium screens */
        lg:px-16     /* Large screens */
        xl:px-56     /* Extra large screens */
      '>
              <Navbar />
          </div>
{Children}
      </div>
  )
}

export default layout