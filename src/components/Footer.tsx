"use client"
import { Bio } from '@/data/constants'
import Link from 'next/link'
import React from 'react'
import { DiCssdeck } from 'react-icons/di'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  
  return (
    <footer className='w-full py-8 flex justify-center'>
      <div className='w-full max-w-7xl flex flex-col gap-4 items-center p-4'>
        <Link href='/' className='flex items-center'>
            <DiCssdeck size="3rem" /> 
            <span className='py-0 px-1 font-bold text-lg'>Portfolio</span>
        </Link>

        {/* Nav Items */}
        <nav className='w-full max-w-[800px] flex flex-wrap gap-2 sm:gap-4 justify-center align-center text-xs lg:gap-8 lg:mt-2'>
          <Link href='#about' className='text-base lg:text-xl hover:text-primary '>About</Link>
          <Link href='#skills' className='text-base lg:text-xl hover:text-primary '>Skills</Link>
          <Link href='#experience' className='text-base lg:text-xl hover:text-primary '>Experience</Link>
          <Link href='#projects' className='text-base lg:text-xl hover:text-primary '>Projects</Link>
          <Link href='#education' className='text-base lg:text-xl hover:text-primary '>Education</Link>
        </nav>

        {/* Social Icon */}
        <div className='flex mt-4 gap-2'>
          <Link 
            className="inline-block text-2xl"
            href={Bio.github} 
            target='_bland'>
            <FaGithub />
          </Link>
          <Link 
            className="inline-block text-2xl"
            href={Bio.linkedin} 
            target='_bland'>
            <FaLinkedin />
          </Link>
        </div>

        {/* Copyright */}
        <p className='text-sm mt-6 text-center'>
          &copy; 2023 Rishav Chanda. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer