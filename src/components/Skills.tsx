import { skills } from '@/data/constants'
import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col justify-center items-center relative z-10'>
      <div className='relative flex flex-col justify-between items-center w-full max-w-[1100px] gap-3'>
        <h2 className='text-3xl lg:text-4xl font-bold text-center mt-3 lg:mt-5'>Skills</h2>
        <p className='max-w-[650px] text-center text-base lg:text-lg'>
          Here are some of my skills on which I have been working on for the past 2 years.
        </p>

        <div className='w-full flex flex-wrap justify-center mt-8 gap-8'>
          {skills.map((skill) => (
            <div className='w-full max-w-[330px] md:max-w-[400px] lg:max-w-[500px] border-[0.1px] border-solid border-purple-600 rounded-2xl py-2 lg:py-4 px-9'>
              <h3 className='text-3xl font-bold mb-5 text-center'>{skill.title}</h3>
              <div className='flex flex-wrap justify-center gap-3 mb-5'>
                {skill.skills.map((item) => (
                  <div className='text-sm lg:text-base py-1 md:py-2 lg:py-3 px-3 lg:px-4 flex justify-center items-center gap-2'>
                    <Image src={item.image} width={24} height={24} alt={item.name}></Image>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills