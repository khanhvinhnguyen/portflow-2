"use client"
import React from 'react'

import { projects } from '@/data/constants'
import ProjectCard from './ProjectCard';

const Projects = () => {
  // const [toggle, setToggle] = useState('all');
  
  return (
    <div 
      id='projects' 
      className='flex flex-col justify-center items-center relative z-10 p-0 '
    >
      <div className='relative flex flex-col justify-between items-center w-full max-w-[1350px] py-20 gap-3'>
        <h2 className='text-3xl lg:text-4xl font-bold text-center mt-3 lg:mt-5'>Projects</h2>
        <p className='max-w-7xl text-center text-base lg:text-lg'>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </p>

        {/* Toggle Section */}
        <div>

        </div>

        {/* Card Section */}
        <div className='flex justify-center items-center gap-7 flex-wrap w-full max-w-[1100px]'>
        {projects
            .map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))}
        {/* {projects
          .filter((item) => item.category == toggle)
          .map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))} */}
        </div>

      </div>
    </div>
  )
}

export default Projects