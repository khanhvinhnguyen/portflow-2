"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from '@mui/material';
import { IoClose } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Member, Project } from '@/libs';

type ProjectDetailProps = {
  project: Project;
  onClose: () => void

}
const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <Modal open={true} onClose={onClose}>
      <div className='w-full h-full flex justify-center items-top absolute top-0 left-0 bg-[#000000a7] overflow-y-auto transition-all duration-500 ease-linear'>
        <div className='max-w-[880px] w-full h-min rounded-2xl bg-card text-text_primary flex flex-col p-5 my-12 mx-3 relative'>
          <IoClose 
            size={25}
            className='absolute top-3 right-3 cursor-pointer'
            onClick={onClose}
          />

          <Image 
            src={project?.image} 
            alt={`${project?.title} image`} 
            width={840} 
            height={500}
            className='w-full object-cover rounded-xl mt-7 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'
            unoptimized
          />

          {/* Project Info */}
          <h6 className='text-2xl lg:text-3xl font-bold text-text_primary m-2 mb-0'>{project.title}</h6>
          <p className='text-sm md:text-base text-text_secondary mt-1 mx-2'>{project.date}</p>
          <div className='flex flex-wrap gap-2 my-1 md:my-2'>
            {project.tags?.map((tag: string | null | undefined, index: number ) => (
              <span 
                key={index}
                className='text-xs md:text-base font-normal text-primary bg-primary/10 px-2 py-1 rounded-lg '
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Desc */}
          <p className='text-sm md:text-base font-normal text-text_primary text-ellipsis m-[6px] my-2 mx-[6px]'>{project.description}</p>

          {/* Members */}
          {project.member && (
            <>
              <p className='text-base md:text-xl font-semibold text-text_primary my-2 mx-[6px]'>Members</p>
              <div className='flex flex-col flex-wrap my-[8px] md:my-3 mx-[6px] md:mx-2 gap-[6px]'>
                {project?.member.map((member: Member, index: number) => (
                  <div key={index} className='flex w-full md:w-1/2 justify-between items-center gap-3'>
                    <Image src={member.img} alt={member.name} width={50} height={50} className='w-8 h-8 md:w-12 md:h-12 rounded-full object-cover mt-1 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]' unoptimized/>
                    <p className='text-sm md:text-base flex-1 font-medium text-text_primary'>{member.name}</p>
                    <a href={member.github} target="new" className='text-decoration-none text-inherit'>
                      <FaGithub size={24}/>
                    </a>
                    <a href={member.linkedin} target="new" className='text-decoration-none text-inherit'>
                      <FaLinkedin size={24}/>
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Button group */}
          <div className='flex flex-col md:flex-row flex-wrap gap-3 my-3'>
            {project?.github && 
              <Link 
                href={project?.github} 
                target='new'
                className="flex-1 text-center text-xs md:text-base font-semibold py-3 px-4 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition-all duration-500 ease-linear"
              >
                View Code
              </Link>
            }
            {project.webapp && 
              <Link 
                href={project.webapp} 
                target='new'
                className="flex-1 text-center text-xs md:text-base font-semibold py-3 px-4 rounded-lg bg-primary hover:bg-primary/70 transition-all duration-500 ease-linear"
              >
                View Live App
              </Link>
            }
          </div>

        </div>
      </div>
    </Modal>
  )
}

export default ProjectDetail