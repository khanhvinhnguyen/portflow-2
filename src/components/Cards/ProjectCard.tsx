"use client"
import React from 'react'
import Image from 'next/image'

import { Member, Project } from '@/libs';

type ProjectCardProps = {
  project: Project;
  setOpenModal: (openModal: { state: boolean; project: Project }) => void
}
const ProjectCard = ({project, setOpenModal}: ProjectCardProps) => {
  return (
    <div
      className='w-[330px] h-[490px] bg-card cursor-pointer rounded-xl overflow-hidden flex flex-col py-6 px-5 gap-4 transitions-all duration-500 ease-in-out shadow-[0px_0px_12px_4px_rgba(0,0,0,0.4)]
      hover:shadow-[0px_0px_50px_4px_rgba(0,0,0,0.6)] hover:brightness-110 hover:translate-y-[-10px]'
      onClick={() => setOpenModal({state: true, project: project})}
    >
      <Image 
        src={project.image} 
        alt={`${project.title} image`} 
        width={100} 
        height={180}
        className='w-full h-[180px] object-cover bg-background rounded-[10px] shadow-[0px_0px_16px_2px_rgba(0,0,0,0.3)]'  
      />
      <div className='flex flex-wrap items-center w-full gap-2 mt-1'>
        {project.tags?.map((tag: string | null | undefined, index ) => (
          <span 
            key={index}
            className='text-xs md:text-sm font-normal text-primary bg-primary/10 px-2 py-[2px] rounded-lg'
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project desc */}
      <div className='w-full flex flex-col gap-0 px-[2px]'>
        <h6 className='text-xl font-bold text-text_secondary overflow-hidden max-w-full text-ellipsis line-clamp-2'>{project.title}</h6>
        <p className='text-[10px] md:text-xs font-normal text-text_secondary/70 '>{project.date}</p>
        <p className='font-normal text-text_secondary/70 text-ellipsis line-clamp-3 mt-2'>{project.description}</p>
      </div>

      {/* Member */}
      <div className='flex items-center pl-[10px]'>
        {project.member?.map((member: Member, index) => (
          <Image 
            key={index} 
            src={member.img} 
            alt={`${member.name} avatar`} 
            width={38} 
            height={38}
            className='rounded-full ml-[-10px] bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)] border-[0.1px] border-solid border-card'
          />
        ))}
      </div>

    </div>
  )
}

export default ProjectCard