import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionKey: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionKey: string) => {
    onNavigate(sectionKey);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/images/profile-photo.jpg" 
                alt="Lillian He" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-gray-800">Lillian He</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('education')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => handleNavigation('experience')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => handleNavigation('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation('achievements')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Achievements
            </button>
            <button
              onClick={() => handleNavigation('skills')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavigation('home')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('education')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => handleNavigation('experience')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => handleNavigation('projects')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavigation('achievements')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Achievements
              </button>
              <button
                onClick={() => handleNavigation('skills')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="text-left py-2 mt-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
