import React from 'react'

const cardData = [
  { title: 'Frontend Web Development', description: 'I specialize in Frontend Web Development using  ReactJS, TailwindCSS. I build dynamic, high-performance web applications tailored to your business needs',icon:"https://cdn-icons-png.flaticon.com/128/16437/16437744.png" },
  { title: 'Frontend Web Development', description:' frontend development using React and Tailwind CSS to create visually appealing, high-performance web interfaces. With React component-based architecture, I build scalable and maintainable UIs, ensuring smooth user interactions.', icon:"https://cdn-icons-png.flaticon.com/128/9122/9122626.png" },
 

  { title: 'Backend API Development', description: 'As a back-end web developer I am responsible for server-side web application logic and integration of the work to the front-end. Back-end development usually involves the process to write the web services and APIs used by front-end portion of the website/webapp', icon:"https://cdn-icons-png.flaticon.com/128/17580/17580487.png" },

  { title: 'Database Development', description: 'MongoDB is a NoSQL, document-oriented database designed for scalability and flexibility. It stores data in JSON-like documents, making it ideal for handling large-scale, unstructured data. Its schema-less design allows dynamic changes, enabling faster development and seamless integration with modern applications.', icon:"https://cdn-icons-png.flaticon.com/128/3295/3295488.png" },
  
];

function Services() {
  return (
    <div name="services" className="main px-8 md:px-16 lg:px-[12rem]">
      <div className="heading">
        <h1 className='flex justify-center text-2xl md:text-4xl lg:text-5xl font-black '>My Frontend Services!</h1>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000"  className="para py-4 md:py-8">
          <p  className='pt-4  md:text-xl font-normal max-w-5xl mx-auto text-pretty'>I am a passionate frontend developer specializing in React and Tailwind CSS. I build responsive, user-friendly, and high-performance web applications. With a keen eye for design and usability, I transform ideas into seamless digital experiences. I constantly learn and innovate to craft modern, efficient, and visually appealing websites</p>
        </div>
        <div className="card md:max-w-5xl mx-auto">
          <div className="mb-2 md:mb-6  py-10">
            <div className="container mx-auto">              
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                {
                  cardData.map((item,index)=>(
                    <div data-aos="zoom-in" data-aos-duration="2000" key={index} className="item  shadow-xl py-4 px-3  hover:border-b-2 border-red-400 w-full">
                        <img className='mx-auto' src={item.icon} alt="img" />
                       <h1 className='text-center text-2xl md:text-3xl font-bold pb-4 '>{item.title}</h1>
                       <p className=' text-center text-sm md:text-sm  '>{item.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
