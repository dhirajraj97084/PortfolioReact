import React from 'react'

const projects = [
    {
        title: 'Project 1',
        description: 'A dynamic web app using MERN and Tailwind.',
        imageUrl: 'https://via.placeholder.com/300x200',
        projectUrl: 'https://example.com/project1',
    },
    {
        title: 'Project 2',
        description: 'A responsive e-commerce platform built with React.',
        imageUrl: 'https://via.placeholder.com/300x200',
        projectUrl: 'https://example.com/project2',
    },
    {
        title: 'Project 3',
        description: 'An interactive social media platform with full CRUD functionality.',
        imageUrl: 'https://via.placeholder.com/300x200',
        projectUrl: 'https://example.com/project3',
    },
    {
        title: 'Project 4',
        description: 'A custom content management system for blogs.',
        imageUrl: 'https://via.placeholder.com/300x200',
        projectUrl: 'https://example.com/project4',
    },
    {
        title: 'Project 5',
        description: 'A real-time chat application with WebSockets.',
        imageUrl: 'https://via.placeholder.com/300x200',
        projectUrl: 'https://example.com/project5',
    },
    {
        title: 'Project 6',
        description: 'A portfolio site showcasing professional projects.',
        imageUrl: 'https://via.placeholder.com/300x200',
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
                        <p className='pt-4 text-black/75 md:text-xl font-normal max-w-5xl mx-auto text-pretty'>I have built numerous projects using the MERN stack (MongoDB, Express.js, React, Node.js) combined with Tailwind CSS for rapid, responsive design. From interactive web applications to scalable business solutions, I leverage React’s dynamic UI capabilities with Tailwind’s utility-first approach to create visually stunning and highly functional user experiences. My projects emphasize performance, scalability, and a seamless, mobile-first design tailored to client needs.</p>
                    </div>
                </div>
                {/* projects */}
                ..........................
            </div>
        </div>
    )
}

export default AllProjects
