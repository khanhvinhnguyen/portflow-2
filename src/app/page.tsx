"use client";
import { 
  Contact, 
  Education, 
  Experiences, 
  Hero, 
  ProjectDetail, 
  Projects, 
  Skills
} from "@/components";
import { Project } from "@/libs";
import { useState } from "react";


export default function Home() {
  const [openModal, setOpenModal] = useState<{ state: boolean; project: Project | null }>({
    state: false,
    project: null,
  });
  
  return (
    <>
      <div>
        <Hero/>
        <Skills/>
        <Experiences />
        <Projects setOpenModal={setOpenModal} />
        <Education />
        <Contact />
      </div>

      {openModal.state &&
        <ProjectDetail openModal={openModal as { state: boolean; project: Project }} setOpenModal={setOpenModal} />
      }
    </>
  );
}
