import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='md:h-[41rem] pb-8  text-white flex items-center justify-center'>
      {/* heroSection */}
      <div className="main grid grid-cols-1 md:grid-cols-2 lg:gap-28 md:gap-10 px-8 gap-14 sm:gap-16 ">
        {/* leftPart */}
        <div className="box pt-16 md:pt-0 ">
          <p className='font-bold  text-xs md:text-sm pb-2 text-gray-200 md:hover:scale-110 transition-all flex gap-3'>HELLO THERE , WELCOME TO MY PORTFOLIO <span className='hidden md:block'>WEBSITE</span></p>
          <h1 className='font-bold text-2xl md:text-5xl lg:text-5xl pb-2 text-white/80 md:hover:scale-110 transition-all' >I'm Dhiraj Kumar Tiwari</h1>
          <h1 className='font-bold text-2xl md:text-4xl leading-tight text-pink-600 pb-3 md:hover:scale-110 transition-all'>I'm Full Stack Developer</h1>
          {/* socialmedia */}
          <div className="social flex items-center justify-start gap-5 pt-2 pb-4">

            <div className="github">
              <Link to={'https://github.com/dhirajraj97084'}><button className='rounded-full p-1  cursor-pointer'><FaGithub className='text-3xl bg-black rounded-md'  /></button></Link>
            </div>
            <div className="linkden">
              <Link to={'https://www.linkedin.com/feed/'}><button className='rounded-full p-1  cursor-pointer'><CiLinkedin className=' text-3xl bg-blue-900  rounded-md' /></button></Link>
            </div>
          </div>
          {/* buttons */}
          <div className="button flex md:gap-8 gap-6 justify-center md:justify-start">
            <Link><button className='md:px-6 px-4 py-2  rounded-md bg-pink-900 text-xs md:text-sm'>SEE PORTFOLIO</button></Link>
            <Link><button className='md:px-6 px-4  py-2 border border-pink-700 rounded-md bg-transparent hover:bg-pink-900 text-xs md:text-sm'>CONTACT ME</button></Link>
          </div>
        </div>
        {/* rightPart */}
        <div className="box mx-auto ">
          <div className="img bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600 shadow-xl  p-2 rounded-xl md:w-[20rem] ">
            <img src="/dhirajlogo.jpg" className='md:h-[20rem] md:w-full h-[18rem]   rounded-xl' alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
