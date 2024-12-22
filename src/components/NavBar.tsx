"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { ThemeToggle } from '.';
import { AiOutlineClose } from 'react-icons/ai';

const navigator = [
  {name: "About", link: "/"},
  {name: "Skills", link: "#skills"},
  {name: "Experience", link: "#experiences"},
  {name: "Projects", link: "#projects"},
  {name: "Education", link: "#education"},
  {name: "Contact", link: "#contact"},
]

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

        

        {/* Nav Items */}
        <ul className='NavItems w-full items-center justify-end gap-8 hidden md:flex'>
          {
            navigator.map((item, index) => (
              <Link 
                key={index}
                href={item.link}
                className="hover:text-primary hover:font-bold capitalize"
              >
                {item.name}
              </Link>
            ))
          }

          {/* Theme */}
        </ul>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <div 
            className="hamburger block md:hidden" 
            onClick={() => {setIsOpen(!isOpen)}}
          >
            <FaBars /> 
          </div>
        </div>

        {isOpen && 
          <div className={"fixed left-0 top-0 w-full h-screen bg-black/70"}>
            <div
              className={
                isOpen
                  ? "fixed left-0 top-0 w-[75%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
              }
            >
              <div>
                {/* Logo */}
                <div className="flex w-full items-center justify-between">
                  <Link href='/' className='flex items-center'>
                    <DiCssdeck size="3rem" /> 
                    <span className='py-0 px-1 font-bold text-lg'>Portfolio</span>
                  </Link>

                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="border-b border-gray-300 my-4 pt-4" />

                {/* Menu */}
                <div className="py-4 flex flex-col">
                  <ul className="capitalize">
                    {
                      navigator.map((item, index) => (
                        <Link 
                          key={index}
                          href={item.link}
                        >
                          <li className='py-4 text-sm'>
                            {item.name}
                          </li>
                        </Link>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default NavBar