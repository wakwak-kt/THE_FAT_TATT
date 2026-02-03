import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'ホーム', href: '#' },
    { label: 'スタジオについて', href: '#about' },
    { label: 'ギャラリー', href: '#gallery' },
    { label: 'アーティスト', href: '#artists' },
    { label: 'アクセス', href: '#access' },
  ];

  const navLinks = [
    { id: 'about', label: 'スタジオ' },
    { id: 'gallery', label: 'ギャラリー' },
    { id: 'artists', label: 'アーティスト' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-2xl border-b-4 border-black'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-16 h-16 transform group-hover:scale-110 transition-all duration-300">
              <img 
                src="https://static.readdy.ai/image/763cd5476cea5c3de6df92252e2f6a79/e523d0c56cb647b86c05dc58a234f0ff.png" 
                alt="THE FAT TATT Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-black text-black hover:text-brand-yellow transition-colors cursor-pointer relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-brand-yellow group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <a
              href="https://instagram.com/the_fat_tatt"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-8 py-3 bg-black text-brand-yellow text-sm font-black rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap border-4 border-black"
            >
              予約する
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-black hover:text-brand-yellow transition-colors cursor-pointer"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t-4 border-black shadow-2xl">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-base font-black text-black hover:text-brand-yellow transition-colors cursor-pointer py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://instagram.com/the_fat_tatt"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="block w-full px-8 py-4 bg-black text-brand-yellow text-center text-sm font-black rounded-full hover:shadow-2xl transition-all duration-300 cursor-pointer whitespace-nowrap border-4 border-black"
            >
              予約する
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
