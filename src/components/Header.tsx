
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-white">E-Cell</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-300 hover:text-gold-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-gold-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-slate-300 hover:text-gold-400 transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('sponsors')}
              className="text-slate-300 hover:text-gold-400 transition-colors"
            >
              Sponsors
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-gold-400 transition-colors"
            >
              Contact
            </button>
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 hover:from-gold-600 hover:to-gold-700">
              Join Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-300 hover:text-gold-400 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-gold-400 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="text-slate-300 hover:text-gold-400 transition-colors text-left"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('sponsors')}
                className="text-slate-300 hover:text-gold-400 transition-colors text-left"
              >
                Sponsors
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-300 hover:text-gold-400 transition-colors text-left"
              >
                Contact
              </button>
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 hover:from-gold-600 hover:to-gold-700 w-fit">
                Join Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
