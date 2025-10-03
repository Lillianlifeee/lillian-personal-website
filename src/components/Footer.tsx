import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import VisitorCounter from './VisitorCounter';

interface FooterProps {
  onNavigate: (sectionKey: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/images/profile-photo.jpg" 
                  alt="Lillian He" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">Lillian He</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Finance & Technology Professional<br />
              Accounting & Finance Honours Student<br />
              University of Hong Kong
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => onNavigate('education')} 
                className="block w-full text-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                Education
              </button>
              <button 
                onClick={() => onNavigate('experience')} 
                className="block w-full text-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                Experience
              </button>
              <button 
                onClick={() => onNavigate('projects')} 
                className="block w-full text-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                Research & Projects
              </button>
              <button 
                onClick={() => onNavigate('achievements')} 
                className="block w-full text-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                Achievements
              </button>
              <button 
                onClick={() => onNavigate('skills')} 
                className="block w-full text-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                Skills
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/in/ye-lillian-he/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn Profile
              </a>
              <a 
                href="tel:+85284808223"
                className="flex items-center justify-center md:justify-end text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} className="mr-2" />
                +852 8480-8223
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Visitor Counter */}
          <div className="flex justify-center mb-6">
            <VisitorCounter />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-gray-400 text-sm text-center">
              <p>
                © 2025 Lillian He. All rights reserved.
              </p>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Currently pursuing Bachelor's degree at University of Hong Kong (2022-2026) | 
              Exchange student at USC (Jan-May 2025) | 
              Open to internship and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
