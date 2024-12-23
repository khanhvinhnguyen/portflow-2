"use client";
import React, { Suspense } from 'react';
import { Project } from '@/libs';
import { useState } from 'react';

// Lazy loaded components
const Hero = React.lazy(() => import('@/components/Hero'));
const Skills = React.lazy(() => import('@/components/Skills'));
const Experiences = React.lazy(() => import('@/components/Experiences'));
const Projects = React.lazy(() => import('@/components/Projects'));
const Education = React.lazy(() => import('@/components/Education'));
const Contact = React.lazy(() => import('@/components/Contact'));
const ProjectDetail = React.lazy(() => import('@/components/ProjectDetail'));

export default function Home() {
  const [openModal, setOpenModal] = useState<{ state: boolean; project: Project | null }>({
    state: false,
    project: null,
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Hero />
        <Skills />
        <Experiences />
        <Projects setOpenModal={setOpenModal} />
        <Education />
        <Contact />
      </div>
      {openModal.state && (
        <ProjectDetail
          openModal={openModal as { state: boolean; project: Project }}
          setOpenModal={setOpenModal}
        />
      )}
    </Suspense>
  );
}
