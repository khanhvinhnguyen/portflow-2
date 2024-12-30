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
        <div className='w-full bg-custom'>
          <Skills />
          <Experiences />
        </div>
        <div className='w-full bg-custom' >
          <Projects />
          <Education />
        </div>
        <Contact />
      </div>
    </Suspense>
  );
}
