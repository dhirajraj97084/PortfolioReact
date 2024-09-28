import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function HeroAbout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
   <div name="contact" className="main px-8 md:px-16 lg:px-[12rem]">
     <div className="heading  ">
     <h1 className='flex justify-center text-2xl md:text-4xl lg:text-5xl font-black '>About Dhiraj !</h1>
     <div className="para py-4 md:py-8">
     <p className='pt-4 text-black/75 md:text-xl font-normal'>I'm Dhiraj Kumar Tiwari, a dedicated MERN stack developer with expertise in building full-stack web applications using MongoDB, Express, React, and Node.js. I specialize in creating scalable, high-performance, and user-friendly solutions. My passion lies in solving complex problems through clean code, modern technologies, and innovative web development practices.</p>
     <p className='pt-4 text-black/75 md:text-xl font-normal'>Experienced in Next.js, I build fast, SEO-friendly, and scalable web applications with server-side rendering and seamless user experiences.</p>
     <p className='pt-4 text-black/75 md:text-xl font-normal'>Skilled in React and Tailwind CSS, I create modern, responsive web applications with clean, efficient UI components. Tailwind's utility-first approach combined with React's flexibility enables me to build fast, highly customizable, and visually appealing user interfaces with ease.</p>
     </div>

     {/* filter */}

     <div className="main_box hidden md:flex flex-wrap gap-6 md:gap-8 lg:gap-12 justify-between items-center pb-6">
        <Link><h1 className='text-red-600 cursor-pointer underline underline-offset-4 decoration-red-600'>Tech Stack</h1></Link>
        <Link><h1 className='md:hover:text-red-600 cursor-pointer underline underline-offset-4 hover:decoration-red-600'>Work Experience</h1></Link>
        <Link><h1 className='md:hover:text-red-600 cursor-pointer underline underline-offset-4 hover:decoration-red-600'>Internship Experience</h1></Link>
        <Link><h1 className='md:hover:text-red-600 cursor-pointer underline underline-offset-4 hover:decoration-red-600'>Education</h1></Link>
        <Link><h1 className='md:hover:text-red-600 cursor-pointer underline underline-offset-4 hover:decoration-red-600'>Online Education</h1></Link>
     </div > 
     {/* mobile      */} 
     <div className="relative inline-block text-left md:hidden pb-6">
      {/* Button to toggle dropdown */}
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm w-full px-36  py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
        >
          Menu
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="origin-top-left w-full absolute right-0 mt-2  rounded-md shadow-lg bg-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tech Stack</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Work Experience</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Internship Experience</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Education</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Online Education</a>
          </div>
        </div>
      )}
    </div>

     </div>
   </div>
    </div>
  )
}

export default HeroAbout
