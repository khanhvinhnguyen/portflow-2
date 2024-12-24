"use client";
import React, { Suspense } from 'react';
import { Project } from '@/libs';
import { useState } from 'react';

// Lazy loaded components
const Hero = React.lazy(() => import('@/components/Hero'));
const Skills = React.lazy(() => import('@/components/Skills'));
const Experiences = React.lazy(() => import('@/components/Experience/Experiences'));
const Projects = React.lazy(() => import('@/components/Project/Projects'));
const Education = React.lazy(() => import('@/components/Education/Education'));
const Contact = React.lazy(() => import('@/components/Contact'));
const ProjectDetail = React.lazy(() => import('@/components/Project/ProjectDetail'));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Hero />
        <Skills />
        <Experiences />
        <Projects />
        <Education />
        <Contact />
      </div>
    </Suspense>
  );
}
