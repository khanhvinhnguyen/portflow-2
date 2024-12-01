"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 left-0 w-full flex items-center justify-center p-4 z-50 transition-all duration-800 ease-in-out md:transition-none'>
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
          <a href="#about">About</a>
          <a href='#skills'>Skills</a>
          <a href='#experience'>Experience</a>
          <a href='#projects'>Projects</a>
          <a href='#education'>Education</a>
          <a href='#contact'>Contact</a>
        </ul>

        {/* Theme */}
        

        {/* Mobile Menu */}
        {
          isOpen &&
          <div className='MobileMenu flex flex-col items-center justify-center gap-4 fixed top-0 left-0 w-full h-screen bg-[#171717] text-white z-50'>
            <Link href="#about" onClick={() => {
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
    </header>
  )
}

export default NavBar