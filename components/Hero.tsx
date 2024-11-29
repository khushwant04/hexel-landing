import Navbar from './Navbar'
import { FlipWordsHero } from './FlipWords'

const Hero = () => {
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

      {/* Main content with matching padding */}
      <div className='w-full
        px-4         /* Mobile padding */
        sm:px-6      /* Small screens */
        md:px-12     /* Medium screens */
        lg:px-16     /* Large screens */
        xl:px-56     /* Extra large screens */
      '>
        <div className='container mx-auto pt-14'>
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
    </div>
  )
}

export default Hero