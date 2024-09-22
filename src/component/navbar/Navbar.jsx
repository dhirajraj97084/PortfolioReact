import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' bg-gradient-to-l from-indigo-400 via-purple-400 to-pink-400  text-white'>
      {/* navbar */}
      <div className="main container mx-auto flex justify-between lg:px-[13rem] items-center px-8 sm:px-16   py-2">
        {/* logo */}
        <div className="div"><Link to={'/'}><img className='md:h-16 h-12' src="/logo.png" alt="img" /></Link></div>
        {/* desktopMenu */}
        <div className="div hidden md:block">
          <ul className='flex items-center space-x-12 font-bold cursor-pointer'>
          <Link><li className='hover:scale-105 transition-all'>Home</li></Link>
          <Link><li className='hover:scale-105 transition-all'>About</li></Link>
          <Link><li className='hover:scale-105 transition-all'>Projects</li></Link>
          <Link><li className='hover:scale-105 transition-all'>Contact</li></Link>
          </ul>
        </div>
         {/* mobileMenu */}
        <div className="div md:hidden">mobile</div>
      </div>
    </div>
  )
}

export default Navbar
