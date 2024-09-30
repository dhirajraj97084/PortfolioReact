import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import {FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import pdf from '../pdf/resume.pdf'
import { FaHandsClapping } from 'react-icons/fa6';
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';



function HeroSection() {
  return (
    <div  data-aos="zoom-in-down" data-aos-duration="2000" name="home" className='md:h-[41rem] pb-8  flex items-center justify-center'>
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
          <h1 className='font-black text-xl md:text-3xl lg:text-5xl pb-2  md:hover:scale-110 transition-all' >I am Dhiraj Kumar Tiwari ,</h1>
          {/* <h1 className='font-bold text-[#dc2626] text-2xl md:text-5xl leading-tight  pb-3 md:hover:scale-110 transition-all'>I'm Full Stack Developer</h1> */}
          <div className='font-bold text-[#dc2626] text-xl md:text-3xl lg:text-5xl leading-tight  flex space-x-3'>
            <h1 > I'm  a</h1>
          <ReactTyped  
          className='font-bold text-[#dc2626] text-xl md:text-3xl lg:text-5xl leading-tight  pb-3'        
          strings={["Web Developer ,","Frontend Dev ,","Backend Dev ,", "Full Stack Developer ,"," UI/UX Developer ."]}
          typeSpeed={40}
          backSpeed={50}
          loop="infinity"
        />
          </div>
          <h1 className='font-black text-xl md:text-3xl lg:text-5xl leading-tight  pb-3 md:hover:scale-110 transition-all'>based in India .</h1>
          <p className='pt-3 text-xl'>Hi, I’m Dhiraj Kumar Tiwari, a full stack MERN developer with a passion for building dynamic and scalable web applications that solve real-world problems.</p>          
          {/* buttons */}
          <div className="button flex md:gap-8 gap-6 pt-5 justify-start">
            <a target='_blank' href={pdf} download="resume.pdf">
              <button className="md:px-6 px-4 py-2 rounded-md text-white  bg-red-600 text-xs md:text-sm">
                Download Resume
              </button>
            </a>
            <Link to={'/contact'}><button className='md:px-6 px-4  py-2 border border-red-600 text-red-600 rounded-md bg-transparent hover:bg-red-600   text-xs hover:text-white md:text-sm'>CONTACT ME</button></Link>
          </div>
          {/* socialmedia */}
          <div className="social flex items-center  justify-start gap-5 pt-4 md:pt-8">

            <div className="github">
              <Link target='_blank' to={'https://github.com/dhirajraj97084'}><button className='rounded-full p-1  cursor-pointer'><FaGithub className='text-3xl bg-black rounded-md text-white' /></button></Link>
            </div>
            <div className="linkden">
              <Link target='_blank' to={'https://www.linkedin.com/feed/'}><button className='rounded-full p-1  cursor-pointer'><CiLinkedin className=' text-3xl bg-blue-900 text-white  rounded-md' /></button></Link>
            </div>
            <div className="youtube">
              <Link target='_blank'><button className='rounded-full p-1 text-white cursor-pointer'><FaYoutube className=' text-3xl bg-red-600   rounded-md' /></button></Link>
            </div>
            <div className="twitter">
              <Link target='_blank'><button className='rounded-full p-1  cursor-pointer'><FaTwitter className=' text-3xl text-blue-900   rounded-md' /></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
