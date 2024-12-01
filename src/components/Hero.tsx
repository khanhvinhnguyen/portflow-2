'use client';
import React from 'react'
import { Bio } from '../data/constants'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id='about'>
      <div className='flex items-center justify-center relative py-8 px-4 md:py-16 lg:py-20 lg:px-8 z-10 clip-path-custom-polygon'>
        {/* Hero background animation */}
        <div>
        </div>

        {/* Hero content */}
        <div className="relative flex flex-col justify-between items-center w-full max-w-[1100px] md:flex-row">
          <div 
            id='Left' 
            className="w-full order-2 md:order-1 mb-8 sm:mb-20 justify-center md:justify-end md:items-center gap-3"
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-0 text-white text-center md:text-left sm:mb-2'>
              Hi, my name is <br/>{Bio.name}
            </h1>
            <p className='flex text-2xl md:text-3xl leading-[68px] font-bold mb-4 md:mb-0 text-center gap-3'>
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
            </p>
            <p className='text-white text-lg md:text-2xl'>
              {Bio.description}
            </p>
          </div>

          <div 
            id='Right'
            className='flex w-full order-1 sm:order-1 md:order-2 mb-8 md:mb-0  justify-center md:justify-end items-center'
          >
            <Image 
              className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full border-2 border-solid border-white'
              src={'https://placehold.co/400'} 
              alt={`${Bio.name} profile picture`}
              width={400} 
              height={400}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero