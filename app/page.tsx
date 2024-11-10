"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
    </>
  );
}
