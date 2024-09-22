import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='h-[41rem] bg-gradient-to-l from-indigo-400 via-purple-400 to-pink-400  text-white flex items-center justify-center'>
      {/* heroSection */}
      <div className="main grid grid-cols-1 md:grid-cols-2 lg:gap-28 md:gap-10 px-8 gap-14 sm:gap-16 ">
        {/* leftPart */}
        <div className="box pt-10 md:pt-0">
           <p className='font-bold  text-xs md:text-sm pb-2 text-gray-200 hover:scale-110 transition-all'>HELLO THERE , WELCOME TO MY PORTFOLIO WEBSITE</p>
           <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl pb-2 text-white/80 hover:scale-110 transition-all' >I'm Dhiraj Tiwari</h1>
           <h1 className='font-bold text-4xl md:text-5xl leading-tight text-pink-600 pb-6 hover:scale-110 transition-all'>I'm Full Stack Developer</h1>
           {/* buttons */}
           <div className="button flex md:gap-8 gap-6 justify-center md:justify-start">
            <Link><button className='md:px-6 px-4 py-2  rounded-md bg-pink-900'>SEE PORTFOLIO</button></Link>
            <Link><button className='md:px-6 px-4  py-2 border border-pink-700 rounded-md bg-transparent hover:bg-pink-900'>CONTACT ME</button></Link>
           </div>
        </div>
        {/* rightPart */}
        <div className="box mx-auto ">
          <div className="img bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600 shadow-xl  p-2 rounded-xl w-[20rem] ">
            <img src="/dhirajlogo.jpg" className='h-[20rem] w-full  rounded-xl' alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
