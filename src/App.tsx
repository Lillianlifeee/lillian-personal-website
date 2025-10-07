import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isMainExpanded, setIsMainExpanded] = useState(true);
  const [sectionStates, setSectionStates] = useState({
    education: false,
    experience: false,
    projects: false,
    achievements: false,
    certifications: false,
    skills: false,
    contact: false
  });

  const handleMainExpand = () => {
    setIsMainExpanded(true);
  };

  const toggleSection = (section: string) => {
    setSectionStates(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const smartScrollToSection = (sectionKey: string) => {
    // If it's home, scroll to hero section
    if (sectionKey === 'home' || sectionKey === 'hero') {
      const element = document.getElementById('hero');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // First ensure main is expanded
    if (!isMainExpanded) {
      setIsMainExpanded(true);
    }

    // Check if the section is collapsed
    const isCurrentlyExpanded = sectionStates[sectionKey as keyof typeof sectionStates];
    
    if (!isCurrentlyExpanded) {
      // Expand the section first
      setSectionStates(prev => ({
        ...prev,
        [sectionKey]: true
      }));
    }

    // Wait a bit for the animation to complete, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionKey);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, isCurrentlyExpanded ? 0 : 300); // No delay if already expanded
  };

  const SectionWrapper = ({ 
    title, 
    sectionKey, 
    children, 
    bgColor = "bg-white" 
  }: { 
    title: string; 
    sectionKey: string; 
    children: React.ReactNode; 
    bgColor?: string;
  }) => {
    const isExpanded = sectionStates[sectionKey];
    
    return (
      <div id={sectionKey} className={`${bgColor} border-b border-gray-200`}>
        <div 
          className="cursor-pointer py-8 px-8 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 border-l-4 border-transparent hover:border-blue-400"
          onClick={() => toggleSection(sectionKey)}
        >
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent tracking-wide font-serif">{title}</h2>
            <div className="flex items-center space-x-3 text-gray-500 hover:text-blue-600 transition-colors duration-200">
              <span className="text-sm font-medium tracking-wide px-3 py-1 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200">
                {isExpanded ? 'Collapse' : 'Expand'}
              </span>
              {isExpanded ? (
                <ChevronUp size={18} className="transform transition-transform duration-200" />
              ) : (
                <ChevronDown size={18} className="transform transition-transform duration-200" />
              )}
            </div>
          </div>
        </div>
        {isExpanded && (
          <div className="animate-fade-in">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <Header onNavigate={smartScrollToSection} />
      <main>
        <Hero onExpand={handleMainExpand} isExpanded={isMainExpanded} />
        {isMainExpanded && (
          <div className="space-y-0">
            <SectionWrapper title="Education" sectionKey="education" bgColor="bg-gradient-to-br from-slate-50 to-blue-50">
              <Education />
            </SectionWrapper>
            
            <SectionWrapper title="Experience" sectionKey="experience" bgColor="bg-white">
              <Experience />
            </SectionWrapper>
            
            <SectionWrapper title="Projects" sectionKey="projects" bgColor="bg-gradient-to-br from-slate-50 to-blue-50">
              <Projects />
            </SectionWrapper>
            
            <SectionWrapper title="Extracurricular Activities" sectionKey="achievements" bgColor="bg-white">
              <Achievements />
            </SectionWrapper>
            
            <SectionWrapper title="Certifications" sectionKey="certifications" bgColor="bg-gradient-to-br from-slate-50 to-blue-50">
              <Certifications />
            </SectionWrapper>
            
            <SectionWrapper title="Skills & Interests" sectionKey="skills" bgColor="bg-white">
              <Skills />
            </SectionWrapper>
            
            <SectionWrapper title="Contact" sectionKey="contact" bgColor="bg-white">
              <Contact />
            </SectionWrapper>
          </div>
        )}
      </main>
      <Footer onNavigate={smartScrollToSection} />
    </div>
  );
}

export default App;
