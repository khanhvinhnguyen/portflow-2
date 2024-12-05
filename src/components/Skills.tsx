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
            <div>
              <h3>{skill.title}</h3>
              <div>
                {skill.skills.map((item) => (
                  <div>
                    <Image src={item.image} width={50} height={50} alt={item.name}></Image>
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