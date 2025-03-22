import Image from 'next/image';
import React from 'react'

type ExperienceCardProps = {
  experience: {
    id: number;
    img: string;
    role: string;
    company: string;
    date: string;
    desc: string;
    skills?: string[];
    doc?: string;
  };
};

const ExperienceCard = (props: ExperienceCardProps) => {
  const { experience } = props

  return (
    <div className='w-[300px] md:w-[650px] lg:w-full flex flex-col justify-between items-center bg-card relative overflow-hidden gap-3 text-left border-[0.1px] border-solid border-purple-600 rounded-md py-3 px-4'>
      <div className='w-full flex gap-3'>
        <Image 
          src={experience.img} 
          alt={experience.role} 
          width={100} 
          height={100}
          className='rounded-xl h-10 md:h-12 w-10 md:w-12 mt-1 bg-white' 
          unoptimized
        />
        <div className='flex flex-col w-ful'>
          <h6 className='text-sm md:text-lg font-semibold text-primary'>{experience.role}</h6>
          <p className='text-xs md:text-sm font-normal text-text_secondary'>{experience.company}</p>
          <p className='text-xs md:text-sm font-normal text-text_secondary'>{experience.date}</p>
        </div>
      </div>

      <div className='w-full text-xs md:text-sm font-normal mt-2'>
        {experience?.desc &&
          <span className='overflow-hidden w-full text-ellipsis'>{experience?.desc}</span>
        }
        {experience?.skills &&
          <>
            <br />
            <div className='w-full flex gap-3'>
              <b>Skills:</b>
              <div className='flex flex-wrap gap-2'>
                {experience?.skills?.map((skill, index) => (
                  <p
                    key={index}
                    className='text-xs md:text-sm font-normal text-text_secondary'
                  >• {skill}</p>
                ))}
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default ExperienceCard