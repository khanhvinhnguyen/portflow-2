"use client"
import React, { useEffect, useState } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { experiences } from '@/data/constants';
import { ExperienceCard } from './Cards';

const Experiences = () => {
  const [timelinePosition, setTimelinePosition] = useState<"right" | "alternate-reverse">("alternate-reverse");

  useEffect(() => {
    const updatePosition = () => {
      setTimelinePosition(window.innerWidth <= 1023 ? "right" : "alternate-reverse");
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
   
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, []);
  
  return (
    <div 
      id='experiences'
      className='flex flex-col justify-center items-center relative z-10 p-0 '
    >
      <div className='relative flex flex-col justify-between items-center w-full max-w-[1350px] py-20 gap-3'>
        <h2 className='text-3xl lg:text-4xl font-bold text-center mt-3 lg:mt-5'>Experiences</h2>
        <p className='max-w-7xl text-center text-base lg:text-lg'>
          My work experience as a software engineer and working on different companies and projects.
        </p>

        {/* Timeline Section  */}
        <div className='w-full max-w-[1100px] mt-3 flex flex-col justify-center items-center gap-3'>
          <Timeline position={timelinePosition}>
            {experiences.map((experience,index) => (
              <TimelineItem key={index}>
                  <TimelineSeparator>
                      <TimelineDot variant="outlined" color="secondary" />
                      {index !== experiences.length && 
                        <TimelineConnector style={{ background: '#854CE6' }} />
                      }
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <ExperienceCard experience={experience}/>
                  </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default Experiences