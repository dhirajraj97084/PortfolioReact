import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className=' bg-transparent text-white shadow-md '>
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
        <div className="div md:hidden text-black">
        {(!menu)?
        <button onClick={()=>setMenu(!menu)} className='p-1 rounded-md bg-gray-200'><IoMenu className='text-4xl' /></button>:
        <button onClick={()=>setMenu(!menu)} className='p-1 rounded-md bg-gray-200'><RxCross2 className='text-4xl' /></button>
       }
        </div>
      </div>
    </div>
  )
}

export default Navbar
