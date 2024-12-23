'use client';
import React from 'react'
import { Bio } from '../data/constants'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
    <div id='about'>
      <div className='flex items-center justify-center relative py-8 lg:py-20 px-4 lg:px-8 z-10 clip-path-custom-polygon h-screen 2xl:h-fit'>
        {/* Hero background animation */}
        <div>
        </div>

        {/* Hero content */}
        <div className="relative flex flex-col justify-between items-center w-full max-w-[1100px] lg:flex-row">
          <div 
            id='Left' 
            className="w-full order-2 lg:order-1 mb-8 sm:mb-0 flex flex-col justify-center items-center lg:items-start gap-3"
          >
            <h1 className='text-4xl lg:text-5xl font-bold mb-0 text-center lg:text-left sm:mb-2'>
              Hi, my name is <br/>{Bio.name}
            </h1>
            <div className='flex text-2xl lg:text-3xl leading-[68px] font-bold mb-4 lg:mb-0 justify-center lg:justify-start text-center gap-3'>
              I am a 
              <span className='text-primary'>
                <Typewriter 
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <p className='text-base lg:text-xl mb-10'>
              {Bio.description}
            </p>
            <Link 
              href={Bio.resume} 
              target='_blank'
              className="appearance-none no-underline w-[95%] max-w-[300px] flex justify-center text-center py-4 sm:py-4 px-0 text-white rounded-full cursor-pointer font-semibold text-[18px] sm:text-[20px] transition-all duration-200 ease-in-out bg-[linear-gradient(225deg,hsla(271,100%,50%,1),hsla(294,100%,50%,1))] shadow-[20px_20px_60px_#1F2634,-20px_-20px_60px_#1F2634] hover:scale-105 hover:duration-400 hover:ease-in-out hover:brightness-100"
            >
              Check Resume
            </Link>
          </div>

          <div 
            id='Right'
            className='flex w-full order-1 sm:order-1 lg:order-2 mb-8 lg:mb-0  justify-center lg:justify-end items-center'
          >
            <Image 
              className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full border-2 border-solid border-white'
              src={Bio.avatar || 'https://placehold.co/400'}
              alt={`${Bio.name} profile picture`}
              width={400} 
              height={400}
              priority
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero