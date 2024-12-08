import React, { useState, useEffect } from 'react';
import { IoMenu, IoMoon, IoSunny } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-scroll';

function Navbar() {
  const [menu, setMenu] = useState(false); // For mobile menu toggle
  const [darkMode, setDarkMode] = useState(false); // For dark mode toggle

  // Effect to apply dark mode to the whole body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
      document.body.classList.remove('bg-white', 'text-gray-900');
    } else {
      document.body.classList.add('bg-white', 'text-gray-900');
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
  }, [darkMode]);

  return (
    <div
      className={`shadow-md top-0 sticky z-50 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* navbar */}
      <div className="main container mx-auto flex justify-between lg:px-[10rem] items-center px-8 sm:px-6 py-2">
        {/* logo */}
        <div>
          <Link to={'home'} smooth={true} duration={500} offset={-70} activeClass="active">
            <img
              className="md:h-16 h-12"
              src="https://cdn-icons-png.flaticon.com/128/2720/2720550.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center md:space-x-4 lg:space-x-12 font-bold cursor-pointer">
            <Link to={'home'} smooth={true} duration={500} offset={-70} activeClass="active">
              <li className="hover:scale-105 transition-all hover:text-red-600">Home</li>
            </Link>
            <Link to={'about'} smooth={true} duration={500} offset={-70} activeClass="active">
              <li className="hover:scale-105 transition-all hover:text-red-600">About</li>
            </Link>
            <Link to={'services'} smooth={true} duration={500} offset={-70} activeClass="active">
              <li className="hover:scale-105 transition-all hover:text-red-600">Services</li>
            </Link>
            <Link to={'allProjects'} smooth={true} duration={500} offset={-70} activeClass="active">
              <li className="hover:scale-105 transition-all hover:text-red-600">All Projects</li>
            </Link>
            <Link to={'testi'} smooth={true} duration={500} offset={-70} activeClass="active">
              <li className="hover:scale-105 transition-all hover:text-red-600">Testimonials</li>
            </Link>
            <Link to={'contact'} smooth={true} duration={500} offset={-70} activeClass="active">
              <li className="hover:scale-105 transition-all hover:text-red-600">Contact</li>
            </Link>
          </ul>

          {/* Theme toggle button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
          </button>
        </div>

        {/* mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme toggle button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
          </button>
          <button
            onClick={() => setMenu(!menu)}
            className="p-1 rounded-md"
            aria-label={menu ? 'Close Menu' : 'Open Menu'}
          >
            {menu ? <RxCross2 className="text-4xl" /> : <IoMenu className="text-4xl" />}
          </button>
        </div>
      </div>

      {/* mobile menu items */}
      <div className="md:hidden">
        {menu && (
          <ul className="flex flex-col items-center font-bold cursor-pointer space-y-4 pb-4">
            <Link
              to={'home'}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={() => setMenu(false)}
            >
              <li className="hover:scale-105 transition-all hover:text-red-600">Home</li>
            </Link>
            <Link
              to={'about'}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={() => setMenu(false)}
            >
              <li className="hover:scale-105 transition-all hover:text-red-600">About</li>
            </Link>
            <Link
              to={'services'}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={() => setMenu(false)}
            >
              <li className="hover:scale-105 transition-all hover:text-red-600">Services</li>
            </Link>
            <Link
              to={'allProjects'}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={() => setMenu(false)}
            >
              <li className="hover:scale-105 transition-all hover:text-red-600">All Projects</li>
            </Link>
            <Link
              to={'testi'}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={() => setMenu(false)}
            >
              <li className="hover:scale-105 transition-all hover:text-red-600">Testimonials</li>
            </Link>
            <Link
              to={'contact'}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={() => setMenu(false)}
            >
              <li className="hover:scale-105 transition-all hover:text-red-600">Contact</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
