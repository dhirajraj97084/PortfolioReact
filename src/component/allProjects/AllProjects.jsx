import React from 'react'
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'Digital Marketing',
        description: 'A dynamic digital marketing website using react and Tailwindcss.',
        imageUrl: '/digi.png',
        projectUrl: 'https://example.com/project1',
    },
    {
        title: 'Book Store',
        description: 'A responsive Bookstore website built with React , tailwindcss and daisyUI',
        imageUrl: '/book.png',
        projectUrl: 'https://example.com/project2',
    },
    {
        title: 'Chemical Marketing',
        description: 'An interactive Metal prepenting chemicals platform using tailwindcss , reactjs ,Material Tilwindcss.',
        imageUrl: '/np.png',
        projectUrl: 'https://example.com/project3',
    },
    {
        title: 'Photography',
        description: 'An interactive Wedding , Photography Website using tailwindcss , reactjs ,Material Tilwindcss.',
        imageUrl: '/graphi.png',
        projectUrl: 'https://example.com/project4',
    },
    {
        title: 'Portfolio',
        description: 'A portfolio site showcasing professional projects..using Nextjs and shadcn UI component ',
        imageUrl: '/nextjs.png',
        projectUrl: 'https://example.com/project5',
    },
    {
        title: 'Digital Marketing',
        description: 'An interactive social media platform with react,tailwindcss , animation using React-Motion',
        imageUrl: '/onlinegrow.png',
        projectUrl: 'https://example.com/project6',
    },
];

function AllProjects() {
    return (
        <div>
            <div name="allProjects" className="main px-8 md:px-16 lg:px-[12rem]">
                <div className="heading">
                    <h1 className='flex justify-center text-2xl md:text-4xl lg:text-5xl font-black '>My Current Projects!</h1>
                    <div className="para py-4 md:py-8">
                        <p className='pt-4  md:text-xl font-normal max-w-5xl mx-auto text-pretty'>I have built numerous projects using the MERN stack (MongoDB, Express.js, React, Node.js) combined with Tailwind CSS for rapid, responsive design. From interactive web applications to scalable business solutions, I leverage React’s dynamic UI capabilities with Tailwind’s utility-first approach to create visually stunning and highly functional user experiences. My projects emphasize performance, scalability, and a seamless, mobile-first design tailored to client needs.</p>
                    </div>
                </div>
                {/* projects */}
               <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mx-auto pb-6">
                {
                    projects.map((item,index)=>(
                        <div key={index} className=" shadow-xl p-2 rounded-md">
                           <Link to={item.projectUrl}> <img src={item.imageUrl} alt="" /></Link>
                           <h1 className='text-xl font-bold py-2'>{item.title}</h1>
                           <h1 className='text-sm'>{item.description}</h1>
                        </div>
                    ))
                }
               </div>
            </div>
        </div>
    )
}

export default AllProjects
