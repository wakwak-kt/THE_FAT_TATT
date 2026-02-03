
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ArtistsHero from './components/ArtistsHero';
import ArtistsGrid from './components/ArtistsGrid';
import ContactSection from './components/ContactSection';

const ArtistsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ArtistsHero />
        <ArtistsGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ArtistsPage;
