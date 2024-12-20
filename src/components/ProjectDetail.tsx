"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Modal } from '@mui/material';
import { IoClose } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Member, Project } from '@/libs';

type ProjectDetailProps = {
  openModal: { state: boolean; project: Project };
  setOpenModal: (project: { state: boolean; project: Project | null }) => void;
}
const ProjectDetail = ({ openModal, setOpenModal }: ProjectDetailProps) => {
  const project = openModal?.project;

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <div className='w-full h-full flex justify-center items-top absolute top-0 left-0 bg-[#000000a7] overflow-y-auto transition-all duration-500 ease-linear'>
        <div className='max-w-[880px] w-full h-min rounded-2xl bg-card text-text_primary flex flex-col p-5 gap-4 my-12 mx-3 relative'>
          <IoClose 
            size={25}
            className='absolute top-3 right-3 cursor-pointer'
            onClick={() => setOpenModal({ state: false, project: null })}
          />

          <Image 
            src={project?.image} 
            alt={`${project?.title} image`} 
            width={840} 
            height={500}
            className='w-full object-cover rounded-xl mt-7 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'
          />

          {/* Project Info */}
          <h6>{project.title}</h6>
          <p>{project.date}</p>
          <div className='flex flex-wrap items-center w-full gap-2 mt-1'>
            {project.tags?.map((tag: string | null | undefined, index: number ) => (
              <span 
                key={index}
                className='text-xs md:text-sm font-normal text-primary bg-primary/10 px-2 py-[2px] rounded-full '
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Desc */}
          <p className='font-normal text-text_secondary/70 text-ellipsis line-clamp-3 mt-2'>{project.description}</p>

          {/* Members */}
          {project.member && (
            <>
              <p>Members</p>
              <div>
                {project?.member.map((member: Member, index: number) => (
                  <div key={index}>
                    <Image src={member.img} alt={member.name} width={50} height={50}/>
                    <p>{member.name}</p>
                    <a href={member.github} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                      <FaGithub />
                    </a>
                    <a href={member.linkedin} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                      <FaLinkedin />
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </Modal>
  )
}

export default ProjectDetail