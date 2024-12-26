"use client";
import React, { Suspense } from 'react';
import { Contact } from '@/components';

// Lazy loaded components
const Hero = React.lazy(() => import('@/components/Hero'));
const Skills = React.lazy(() => import('@/components/Skills'));
const Experiences = React.lazy(() => import('@/components/Experience/Experiences'));
const Projects = React.lazy(() => import('@/components/Project/Projects'));
const Education = React.lazy(() => import('@/components/Education/Education'));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='w-full overflow-hidden'>
        <Hero />
        <div 
          className='w-full' 
          style={{
            background: 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
            clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 30% 98%, 0px 100%)',
          }}
        >
          <Skills />
          <Experiences />
        </div>
        <div 
          className='w-full' 
          style={{
            background: 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
            clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 30% 98%, 0px 100%)',
          }}
        >
          <Projects />
          <Education />
        </div>
        <Contact />
      </div>
    </Suspense>
  );
}
