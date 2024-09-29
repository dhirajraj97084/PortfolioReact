import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import HeroSection from '../../component/heroSection/HeroSection'
import Skills from '../../component/skillsSection/Skills'
import HeroAbout from '../../component/hero_about/HeroAbout'
import Services from '../../component/fullStackServices/Services'
import AllProjects from '../../component/allProjects/AllProjects'



function Home() {
  
  return (
    <div className=''>
     <Navbar/>
     <HeroSection/>
     <HeroAbout/>
     {/* <Skills/> */}
     <Services/>
     <AllProjects/>
    </div>
  )
}

export default Home
