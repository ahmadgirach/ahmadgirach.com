import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ScrollProgress } from "@/components/scroll-progress";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
    </>
  );
}
