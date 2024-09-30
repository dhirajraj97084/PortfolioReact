import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Filter from './filter/Filter';


function HeroAbout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
};
return (
  <div>
    <div name="about" className="main px-8 md:px-16 lg:px-[12rem]">
      <div className="heading  ">
        <h1 className='flex justify-center text-2xl md:text-4xl lg:text-5xl font-black '>About Dhiraj !</h1>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000" className="para py-4 md:py-8">
          <p className='pt-4  md:text-xl font-normal'>I'm Dhiraj Kumar Tiwari, a dedicated MERN stack developer with expertise in building full-stack web applications using MongoDB, Express, React, and Node.js. I specialize in creating scalable, high-performance, and user-friendly solutions. My passion lies in solving complex problems through clean code, modern technologies, and innovative web development practices.</p>
          <p className='pt-4  md:text-xl font-normal'>Experienced in Next.js, I build fast, SEO-friendly, and scalable web applications with server-side rendering and seamless user experiences.</p>
          <p className='pt-4  md:text-xl font-normal'>Skilled in React and Tailwind CSS, I create modern, responsive web applications with clean, efficient UI components. Tailwind's utility-first approach combined with React's flexibility enables me to build fast, highly customizable, and visually appealing user interfaces with ease.</p>
        </div>

        {/* filter */}
        <Filter/>       

      </div>
    </div>
  </div>
)
}

export default HeroAbout
