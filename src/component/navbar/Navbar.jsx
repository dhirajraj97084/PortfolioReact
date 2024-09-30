import React, { useState } from 'react'
import { BiSolidToggleLeft, BiSolidToggleRight } from 'react-icons/bi';

import { IoMenu } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom'


function Navbar() {
  const [menu, setMenu] = useState(false);
  const [toggle, setToggle] = useState(false);

  const darkMode = () => {
    if (!toggle) {
      document.body.style.backgroundColor = "rgb(40, 40, 43)";
      document.body.style.color = "white";
    } else {
      setToggle(false);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div className='bg-transparent shadow-md'>
      {/* navbar */}
      <div className="main container mx-auto flex justify-between lg:px-[10rem] items-center px-8 sm:px-6 py-2">
        {/* logo */}
        <div><Link to={'/'}><img className='md:h-16 h-12' src="https://cdn-icons-png.flaticon.com/128/2720/2720550.png" alt="img" /></Link></div>
        {/* desktopMenu */}
        <div className="hidden md:block">
          <ul className='flex items-center md:space-x-4 lg:space-x-12 font-bold cursor-pointer'>
            <Link to={'home'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all text-red-600 underline underline-offset-8'>Home</li></Link>
            <Link to={'about'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all hover:text-red-600'>About</li></Link>
            <Link to={'services'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all hover:text-red-600'>Services</li></Link>
            <Link to={'allProjects'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all hover:text-red-600'>All Projects</li></Link>
            {/* <Link><li className='hover:scale-105 transition-all hover:text-red-600'>Portfolio</li></Link> */}
            <Link to={'testi'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all hover:text-red-600'>Testimonials</li></Link>
            <Link to={'contact'} smooth={true} duration={500} offset={-70} activeClass="active"><li className='hover:scale-105 transition-all hover:text-red-600'>Contact</li></Link>
            
          </ul>
        </div>
        {/* toggle */}
        <div onClick={() => setToggle(!toggle)} className="hidden md:block">
          {toggle ? <h1 onClick={darkMode}><BiSolidToggleRight className='text-5xl md:text-5xl' /></h1> :
            <h1 onClick={darkMode}><BiSolidToggleLeft className='text-5xl md:text-5xl' /></h1>
          }
        </div>
        {/* mobileMenu */}
        <div onClick={() => setMenu(!menu)} className="md:hidden">
          {!menu ?
            <button className='p-1 rounded-md'><IoMenu className='text-4xl' /></button> :
            <button className='p-1 rounded-md'><RxCross2 className='text-4xl' /></button>
          }
        </div>
        <div onClick={() => setToggle(!toggle)} className="md:hidden block">
          {toggle ? <h1 onClick={darkMode}><BiSolidToggleRight className='text-5xl md:text-5xl' /></h1> :
            <h1 onClick={darkMode}><BiSolidToggleLeft className='text-5xl md:text-5xl' /></h1>
          }
        </div>
      </div>
      <div>
        {
          menu && (
            <ul className='flex flex-col items-center font-bold cursor-pointer space-y-4 pb-4'>
              <Link onClick={() => setMenu(false)}><li className='hover:scale-105 transition-all text-red-600 underline underline-offset-8'>Home</li></Link>
              <Link to={'about'} smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(false)}><li className='hover:scale-105 transition-all hover:text-red-600'>About</li></Link>
              <Link to={'services'} smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(false)}><li className='hover:scale-105 transition-all hover:text-red-600'>Services</li></Link>
              <Link to={'allProjects'} smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(false)}><li className='hover:scale-105 transition-all hover:text-red-600'>All Projects</li></Link>
              {/* <Link onClick={() => setMenu(false)}><li className='hover:scale-105 transition-all hover:text-red-600'>Portfolio</li></Link> */}
              <Link to={'testi'} smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(false)}><li className='hover:scale-105 transition-all hover:text-red-600'>Testimonials</li></Link>
              <Link to={'contact'} smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(false)}><li className='hover:scale-105 transition-all hover:text-red-600'>Contact</li></Link>
            
            </ul>
          )
        }
      </div>
    </div>
  );
}

export default Navbar;
