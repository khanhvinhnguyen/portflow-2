import { Experiences, Hero, Skills } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Skills/>
      <Experiences />
    </div>
  );
}
