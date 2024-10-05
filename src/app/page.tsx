import { ContactSection } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Experience />
      <ContactSection />
      <Footer/>
    </div>
  );
}
