import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' bg-transparent text-white'>
      {/* navbar */}
      <div className="main container mx-auto flex justify-between lg:px-[13rem] items-center px-8 sm:px-16  py-2">
        {/* logo */}
        <div className="div"><Link to={'/'}><img className='md:h-16 h-12' src="/logo.png" alt="img" /></Link></div>
        {/* desktopMenu */}
        <div className="div hidden md:block text-black">
          <ul className='flex items-center space-x-12 font-bold cursor-pointer'>
          <Link><li className='hover:scale-105 transition-all text-red-600 underline underline-offset-8'>Home</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>About</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Services</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Certificates</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Portfolio</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Contact</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Testimonials</li></Link>
          </ul>
        </div>
         {/* mobileMenu */}
        <div className="div md:hidden text-black">mobile</div>
      </div>
    </div>
  )
}

export default Navbar
