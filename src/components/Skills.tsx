import React from 'react';
import { 
  Brain,
  Globe,
  Mic,
  Music,
  Palette,
  Activity,
  Calculator
} from 'lucide-react';

const Skills: React.FC = () => {
  const languages = [
    {
      language: "English",
      proficiency: "Proficient",
      details: "Listening 9.0, Reading 9.0, Writing 7.5, Speaking 7.0",
      flag: "🇬🇧"
    },
    {
      language: "Mandarin",
      proficiency: "Native",
      details: "Mother tongue",
      flag: "🇨🇳"
    },
    {
      language: "Cantonese",
      proficiency: "Basic",
      details: "Conversational level",
      flag: "🇭🇰"
    }
  ];

  const interests = [
    { name: "Singing", icon: Mic, color: "text-pink-600 bg-pink-50" },
    { name: "Violin", icon: Music, color: "text-purple-600 bg-purple-50" },
    { name: "Drums", iconUrl: "/images/drum.png", color: "text-red-600 bg-red-50" },
    { name: "Street Dance", iconUrl: "/images/street-dance-icon.png", color: "text-blue-600 bg-blue-50" },
    { name: "Painting", icon: Palette, color: "text-green-600 bg-green-50" },
    { name: "Volleyball", iconUrl: "/images/volleyball.png", color: "text-orange-600 bg-orange-50" }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Languages */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Language Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{lang.flag}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{lang.language}</h4>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                  lang.proficiency === 'Native' 
                    ? 'bg-green-100 text-green-800'
                    : lang.proficiency === 'Proficient'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {lang.proficiency}
                </div>
                <p className="text-gray-600 text-sm">{lang.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Certifications & Key Qualifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Google Data Analytics</h4>
              <p className="text-gray-600 text-sm">Professional Certificate</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-yellow-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">HKICPA Scholarship</h4>
              <p className="text-gray-600 text-sm">Professional Recognition</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-purple-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">IELTS 8.0</h4>
              <p className="text-gray-600 text-sm">English Proficiency</p>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Personal Interests
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="group text-center p-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 ${interest.color.split(' ')[1]}`}>
                  {interest.iconUrl ? (
                    <img 
                      src={interest.iconUrl} 
                      alt={interest.name}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <interest.icon className={interest.color.split(' ')[0]} size={24} />
                  )}
                </div>
                <span className="text-gray-800 font-medium text-sm">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;