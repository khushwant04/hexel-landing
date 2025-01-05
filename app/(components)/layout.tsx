import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='text-white w-full min-h-screen dark'>
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

            {/* Main content with matching padding */}
            <div className='mt-16 w-full
        px-4         /* Mobile padding */
        sm:px-6      /* Small screens */
        md:px-12     /* Medium screens */
        lg:px-16     /* Large screens */
        xl:px-56     /* Extra large screens */
      '>
                {children}
            </div>
        </div>
    )
}

export default Layout