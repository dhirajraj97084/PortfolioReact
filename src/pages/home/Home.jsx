import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import HeroSection from '../../component/heroSection/HeroSection'
import Skills from '../../component/skillsSection/Skills'
import HeroAbout from '../../component/hero_about/HeroAbout'

function Home() {
  return (
    <div className=''>
     <Navbar/>
     <HeroSection/>
     <HeroAbout/>
     {/* <Skills/> */}
    </div>
  )
}

export default Home
