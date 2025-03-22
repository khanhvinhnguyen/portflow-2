import React from 'react'
import Image from 'next/image';

type EducationCardProps = {
  education: {
    img: string;
    role: string;
    school: string;
    degree: string;
    date: string;
    grade?: string;
    desc?: string;
  }
}
const EducationCard = ({education}: EducationCardProps) => {
  return (
    <div className='w-[300px] md:w-[650px] lg:w-full flex flex-col justify-between items-start bg-card relative overflow-hidden gap-3 text-left border-[0.1px] border-solid border-purple-600 rounded-md py-3 px-4'>
      <div className='w-full flex gap-3'>
        <Image 
          src={education.img} 
          alt={education.school + ' logo'} 
          width={100} 
          height={100}
          className='rounded-xl h-10 md:h-14 w-10 md:w-14 mt-1 bg-white' 
          unoptimized
        />
        <div className='flex flex-col w-ful'>
          <h6 className='text-sm md:text-lg font-semibold text-primary'>{education.school}</h6>
          <p className='text-xs md:text-sm font-normal text-text_secondary'>{education.degree}</p>
          <p className='text-xs md:text-sm font-normal text-text_secondary'>{education.date}</p>
        </div>
      </div>

      {/* Grade */}
      {education?.grade && 
        <p className='text-xs md:text-sm text-text_secondary/90 font-normal mt-2'>
          <b>Grade: </b>{education.grade}
        </p>
      }

      {/* Description */}
      {education?.desc && 
        <p className='text-xs md:text-sm text-text_secondary/90 font-normal mb-2'>
          <span className='overflow-hidden w-full text-ellipsis line-clamp-4'>
            {education?.desc}
          </span>
        </p>
      }
    </div>
  )
}

export default EducationCard