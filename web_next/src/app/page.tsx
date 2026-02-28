import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ProcessSection from "@/components/sections/ProcessSection";
import FacilitySection from "@/components/sections/FacilitySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <FacilitySection />
      <ProcessSection />
    </main>
  );
}
