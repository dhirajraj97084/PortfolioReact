import React from 'react'
import { Link } from 'react-router-dom'

function HeroAbout() {
  return (
    <div>
   <div className="main px-8 md:px-16 lg:px-[12rem]">
     <div className="heading  ">
     <h1 className='flex justify-center text-2xl md:text-4xl lg:text-5xl font-black '>About Dhiraj !</h1>
     <div className="para py-4 md:py-8">
     <p className='pt-4 text-black/75 text-xl font-normal'>This is Dhiraj Kumar Tiwari, a Full-stack Software Developer who can build you Full-stack apps with "React.js, Next.js, React Native, Vue.js or Nuxt.js ecosystem for Frontend Development" and "Node.js, Java Spring or Ruby on Rails ecosystem for Backend API Development" along with "Multiple Database options (PostgreSQL, MySQL, MongoDB, DynamoDB, etc)" to choose from for Data Persistence.</p>
     <p className='pt-4 text-black/75 text-xl font-normal'>When it comes to Web API's, I can work with both REST API and GraphQL API.</p>
     <p className='pt-4 text-black/75 text-xl font-normal'>I have a Master's Degree in Computer Applications and is a Java, Javascript, and TypeScript Developer and my current Full Stack Tech-Stack revolves around that for building Web Apps & APIs. I hold a Master's Degree in Computer Applications, and is an Amazon Web Services (AWS) Certified Developer Associate. I also know Python & Ruby.</p>
     </div>

     {/* filter */}

     <div className="main_box flex flex-wrap gap-6 md:gap-8 lg:gap-12 justify-between items-center pb-6">
        <Link><h1 className='text-red-600 cursor-pointer underline underline-offset-4 decoration-red-600'>Tech Stack</h1></Link>
        <Link><h1 className='md:hover:text-red-600 cursor-pointer underline underline-offset-4 hover:decoration-red-600'>Work Experience</h1></Link>
        <Link><h1 className='md:hover:text-red-600 cursor-pointer underline underline-offset-4 hover:decoration-red-600'>Internship Experience</h1></Link>
        <Link><h1 className='md:hover:text-red-600 cursor-pointer underline underline-offset-4 hover:decoration-red-600'>Education</h1></Link>
        <Link><h1 className='md:hover:text-red-600 cursor-pointer underline underline-offset-4 hover:decoration-red-600'>Online Education</h1></Link>
     </div>      
     </div>
   </div>
    </div>
  )
}

export default HeroAbout
