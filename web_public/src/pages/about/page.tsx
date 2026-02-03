
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import AboutHero from './components/AboutHero';
import ConceptSection from './components/ConceptSection';
import SpecialtySection from './components/SpecialtySection';
import FacilitySection from './components/FacilitySection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <AboutHero />
        <ConceptSection />
        <SpecialtySection />
        <FacilitySection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
