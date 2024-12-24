import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { educations } from '@/data/constants';
import { Education as EducationModel } from '@/libs';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div 
      id='education'
      className='flex flex-col justify-center items-center relative z-10 p-0 '
    >
      <div className='relative flex flex-col justify-between items-center w-full max-w-[1350px] py-20 gap-3'>
        <h2 className='text-3xl lg:text-4xl font-bold text-center mt-3 lg:mt-5'>Education</h2>
        <p className='max-w-7xl text-center text-base lg:text-lg'>
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>

        {/* Timeline section */}
        <div className='w-full max-w-[1100px] mt-3 flex flex-col justify-center items-center gap-3'>
          <Timeline 
            position='left'
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {educations.map((education, index) => (
              <TimelineItem key={index}>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <EducationCard education={education as unknown as EducationModel} />
                  </TimelineContent>
                  <TimelineSeparator>
                      <TimelineDot variant="outlined" color="secondary" />
                      {index !== educations.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
                  </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default Education