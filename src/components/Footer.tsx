import Link from 'next/link'
import React from 'react'
import { DiCssdeck } from 'react-icons/di'

const Footer = () => {
  return (
    <footer className='w-full py-8 flex justify-center'>
      <div className='w-full max-w-7xl flex flex-col gap-4 items-center p-4'>
        <Link href='/' className='flex items-center'>
            <DiCssdeck size="3rem" /> 
            <span className='py-0 px-1 font-bold text-lg'>Portfolio</span>
        </Link>

        <nav className='w-full max-w-[800px] flex flex-wrap gap-4 justify-center align-center text-xs lg:gap-8 lg:mt-2'>
          <Link href='#about' className='text-base lg:text-xl hover:text-primary '>About</Link>
          <Link href='#skills' className='text-base lg:text-xl hover:text-primary '>Skills</Link>
          <Link href='#experience' className='text-base lg:text-xl hover:text-primary '>Experience</Link>
          <Link href='#projects' className='text-base lg:text-xl hover:text-primary '>Projects</Link>
          <Link href='#education' className='text-base lg:text-xl hover:text-primary '>Education</Link>
          <Link href='#contact' className='text-base lg:text-xl hover:text-primary '>Contact</Link>
        </nav>


      </div>
    </footer>
  )
}

export default Footer