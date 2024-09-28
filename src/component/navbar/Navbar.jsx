import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom'


function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className='bg-transparent text-white shadow-md  '>
      {/* navbar */}
      <div className="main container mx-auto flex justify-between lg:px-[13rem] items-center px-8 sm:px-16  py-2">
        {/* logo */}
        <div className="div"><Link to={'/'}><img className='md:h-16 h-12' src="https://cdn-icons-png.flaticon.com/128/2720/2720550.png" alt="img" /></Link></div>
        {/* desktopMenu */}
        <div className="div hidden md:block text-black">
          <ul className='flex items-center space-x-12 font-bold cursor-pointer'>
          <Link to={'home'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all text-red-600 underline underline-offset-8'>Home</li></Link>
          <Link to={'contact'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all hover:text-red-600 '>About</li></Link>
          <Link to={'services'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all hover:text-red-600 '>Services</li></Link>
          <Link to={'allProjects'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all hover:text-red-600 '>All Projects</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Portfolio</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Contact</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Testimonials</li></Link>
          </ul>
        </div>
         {/* mobileMenu */}
        <div onClick={()=>setMenu(!menu)} className="div md:hidden text-black">
        {(!menu)?
        <button  className='p-1 rounded-md bg-gray-200'><IoMenu className='text-3xl' /></button>:
        <button  className='p-1 rounded-md bg-gray-200'><RxCross2 className='text-3xl' /></button>
       }
        </div>
      </div>
      <div className="div text-black">
         {
          menu && (
            <ul className='flex flex-col items-center md:space-x-12 font-bold cursor-pointer space-y-4 pb-4'>
          <Link><li className='hover:scale-105 transition-all text-red-600 underline underline-offset-8'>Home</li></Link>
          <Link to={'contact'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all hover:text-red-600 '>About</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Services</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Certificates</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Portfolio</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Contact</li></Link>
          <Link><li className='hover:scale-105 transition-all hover:text-red-600 '>Testimonials</li></Link>
          </ul>
          )
         }
      </div>
    </div>
  )
}

export default Navbar
