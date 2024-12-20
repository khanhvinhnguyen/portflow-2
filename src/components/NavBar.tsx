"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { ThemeToggle } from '.';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sticky top-0 left-0 w-full flex items-center justify-center p-4 z-50 transition-all duration-800 ease-in-out md:transition-none bg-background text-foreground
      shadow-xl'
      >
      <div className='flex w-full max-w-7xl items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
            <DiCssdeck size="3rem" /> 
            <span className='py-0 px-1 font-bold text-lg'>Portfolio</span>
        </Link>

        {/* Hamburger */}
        <div 
          className="hamburger block md:hidden" 
          onClick={() => {setIsOpen(!isOpen)}}
        >
          <FaBars /> 
        </div>

        {/* Nav Items */}
        <ul className='NavItems w-full items-center justify-end gap-8 hidden md:flex'>
          <Link 
            href="/"
            className="hover:text-primary hover:font-bold"
          >
            About
          </Link>
          <Link 
            href='#skills'
            className="hover:text-primary hover:font-bold"
          >
            Skills
          </Link>
          <Link 
            href='#experience'
            className="hover:text-primary hover:font-bold"
          >
            Experience
          </Link>
          <Link 
            href='#projects'
            className="hover:text-primary hover:font-bold"
          >
            Projects
          </Link>
          <Link 
            href='#education'
            className="hover:text-primary hover:font-bold"
          >
            Education
          </Link>
          <Link 
            href='#contact'
            className="hover:text-primary hover:font-bold"
          >
            Contact
          </Link>

          {/* Theme */}
          <ThemeToggle />
        </ul>


        {/* Mobile Menu */}
        {
          isOpen &&
          <div className='MobileMenu flex flex-col items-center justify-center gap-4 fixed top-0 left-0 w-full h-screen bg-[#171717] text-white z-50'>
            <Link href="/" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</Link>
            <Link href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</Link>
            <Link href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</Link>
            <Link href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</Link>
            <Link href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</Link>
          </div>
        }

      </div>
    </div>
  )
}

export default NavBar