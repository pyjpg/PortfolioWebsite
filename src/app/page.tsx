import { ContactSection } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Experience />
      <ContactSection />
    </div>
  );
}
