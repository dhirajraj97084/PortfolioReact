import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import HeroSection from '../../component/heroSection/HeroSection'
import Skills from '../../component/skillsSection/Skills'
import HeroAbout from '../../component/hero_about/HeroAbout'
import Services from '../../component/fullStackServices/Services'
import AllProjects from '../../component/allProjects/AllProjects'
import Contact from '../../component/contact/Contact'
import Testimonial from '../../component/testimonial/Testimonial'
import Footer from '../../component/footer/Footer'



function Home() {
  
  return (
    <div className=''>
     <Navbar/>
     <HeroSection/>
     <HeroAbout/>
     {/* <Skills/> */}
     <Services/>
     <AllProjects/>
     <Contact/>
     <Testimonial/>           
     <Footer/>   
    </div>
  )
}

export default Home
