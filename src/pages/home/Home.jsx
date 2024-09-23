import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import HeroSection from '../../component/heroSection/HeroSection'
import Skills from '../../component/skillsSection/Skills'

function Home() {
  return (
    <div className='bg-gradient-to-l from-indigo-400 via-purple-400 to-pink-400'>
     <Navbar/>
     <HeroSection/>
     <Skills/>
    </div>
  )
}

export default Home
