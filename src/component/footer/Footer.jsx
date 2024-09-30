import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer data-aos="fade-up" data-aos-duration="2000" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Me */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-gray-400">
              I’m a full-stack MERN developer with a passion for building web applications that solve real-world problems.
              From front-end to back-end, I love working on all aspects of software development.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/dhirajraj97084" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="text-gray-400">
              <li>Email: dhirajraj97084@gmail.com</li>
              <li>Phone: +91 7633061405 </li>
              <li>Location: Prem nagar, Dehradun </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dhiraj Kumar Tiwari. All rights reserved.</p>
          <p>Developed with MERN stack</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

