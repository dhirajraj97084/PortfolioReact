import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import pdf from '../pdf/resume.pdf'
import { FaHandsClapping } from 'react-icons/fa6';

function HeroSection() {
  return (
    <div className='md:h-[41rem] pb-8  flex items-center justify-center'>
      {/* heroSection */}
      <div className="main grid grid-cols-1 md:grid-cols-2 lg:gap-28 md:gap-10 px-8 sm:gap-16 ">        
        {/* leftPart */}
        <div className="box mx-auto my-auto pt-16">
          <div className="img bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600 shadow-xl shadow-amber-400  p-2 rounded-full md:w-[20rem] ">
            <img src="/dhirajlogo.jpg" className='md:h-[20rem] md:w-full h-[13rem]   rounded-full' alt="img" />
          </div>
        </div>
        {/* rightPart */}
        <div className="box  md:pt-0 pt-10">
          <p className='  text-xs md:text-sm pb-4  md:hover:scale-110 transition-all flex gap-3 font-light'>HELLO , THERE <span className='text-xl text-yellow-400'> <FaHandsClapping /></span></p>
          <h1 className='font-black text-2xl md:text-5xl lg:text-5xl pb-2 text-black md:hover:scale-110 transition-all' >I am Dhiraj Kumar Tiwari ,</h1>
          <h1 className='font-bold text-[#dc2626] text-2xl md:text-5xl leading-tight  pb-3 md:hover:scale-110 transition-all'>I'm Full Stack Developer</h1>
          <h1 className='font-black text-2xl md:text-5xl leading-tight  pb-3 md:hover:scale-110 transition-all'>based in India .</h1>
          <p className='pt-3 text-xl'>Dhiraj Kumar Tiwari, a Full-stack Developer who can build you web  applications with an array of frontend and backend stack like React.js, Next.js, Tailwindcss, Node.js , Expressjs , MongoDb, etc.</p>          
          {/* buttons */}
          <div className="button flex md:gap-8 gap-6 pt-5 justify-start">
            <a href={pdf} download="resume.pdf">
              <button className="md:px-6 px-4 py-2 rounded-md text-white bg-red-600 text-xs md:text-sm">
                Download Resume
              </button>
            </a>
            <Link><button className='md:px-6 px-4  py-2 border border-red-600 text-red-600 rounded-md bg-transparent hover:bg-red-600 hover:text-white  text-xs md:text-sm'>CONTACT ME</button></Link>
          </div>
          {/* socialmedia */}
          <div className="social flex items-center  justify-start gap-5 pt-4">

            <div className="github">
              <Link to={'https://github.com/dhirajraj97084'}><button className='rounded-full p-1  cursor-pointer'><FaGithub className='text-3xl bg-black rounded-md text-white' /></button></Link>
            </div>
            <div className="linkden">
              <Link to={'https://www.linkedin.com/feed/'}><button className='rounded-full p-1  cursor-pointer'><CiLinkedin className=' text-3xl bg-blue-900 text-white  rounded-md' /></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
