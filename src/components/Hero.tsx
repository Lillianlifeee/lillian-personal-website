import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface HeroProps {
  onExpand: () => void;
  isExpanded: boolean;
}

const Hero: React.FC<HeroProps> = ({ onExpand, isExpanded }) => {
  const scrollToNextSection = () => {
    if (!isExpanded) {
      onExpand();
      // 延迟滚动以确保内容已经渲染
      setTimeout(() => {
        const element = document.getElementById('education');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('education');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(0, 51, 102, 0.9), rgba(0, 102, 204, 0.8)), url('/images/modern_fintech_city_skyline_hero_background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-600/60"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          {/* Profile section */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <img 
                src="/images/profile-photo.jpg" 
                alt="Lillian He Profile"
                className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-blue-300/30"
              />

            </div>
          </div>

          {/* Name and title */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Lillian He
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-200 font-light mb-2">
              何晔 (He Ye)
            </h2>
            <div className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 leading-relaxed">
              Accounting & Finance Student at University of Hong Kong
            </div>
          </div>

          {/* Key highlights */}
          <div className="mb-12 animate-fade-in-up">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-sm font-medium">HKU President's Scholar</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-sm font-medium">USC Exchange Student</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-sm font-medium">IB Full Score: 45/45</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-300/30">
                <span className="text-sm font-medium text-yellow-200">ACCA Competition Champion</span>
              </div>

              <div className="bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-300/30">
                <span className="text-sm font-medium text-yellow-200">Google Data Analytics Certified</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
            <a
              href="https://www.linkedin.com/in/ye-lillian-he"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ExternalLink className="mr-2" size={20} />
              View LinkedIn Profile
            </a>

          </div>


        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/6 w-2.5 h-2.5 bg-yellow-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default Hero;
