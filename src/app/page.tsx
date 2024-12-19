import { Contact, Education, Experiences, Hero, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Skills/>
      <Experiences />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
