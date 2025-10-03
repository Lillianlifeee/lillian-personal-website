import React from 'react';
import { GraduationCap, Award, CalendarDays, MapPin, Trophy } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: "The University of Hong Kong",
      logo: "/images/University_of_Hong_Kong_Official_Logo_HKU_Crest.png",
      degree: "Bachelor in Accounting and Finance (Honours)",
      period: "Sep 2022 - Jun 2026",
      location: "Hong Kong",
      gpa: "",
      achievements: [
        "HKU Undergraduate Entrance Scholarship for President's Scholars (2022-26)",
        "Hong Kong Institute of Certified Public Accountants (HKICPA) Scholarship",
        "Google Data Analytics Certificate"
      ],
      highlight: true
    },
    {
      institution: "University of Southern California",
      logo: "/images/university-of-southern-california-usc-official-seal-logo.jpg",
      degree: "Exchange Study Program",
      period: "Jan 2025 - May 2025",
      location: "Los Angeles, CA, USA",
      gpa: "",
      achievements: [],
      highlight: false
    },
    {
      institution: "High School Affiliated to Nanjing Normal University",
      logo: "/images/nanjing_normal_university_affiliated_high_school_logo.png",
      degree: "International Baccalaureate (IB) Diploma",
      period: "Sep 2019 - Jun 2022",
      location: "Nanjing",
      gpa: "Full Score: 45/45",
      achievements: [
        "Disciplinary representative of the Student Union",
        "President of the volleyball club"
      ],
      highlight: true
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`mb-8 relative ${
                edu.highlight ? 'transform hover:scale-[1.02]' : 'hover:scale-[1.01]'
              } transition-all duration-300`}
            >
              <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                edu.highlight 
                  ? 'border-2 border-gradient-to-r from-blue-500 to-yellow-400 shadow-xl' 
                  : 'border border-gray-200'
              }`}>
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Logo */}
                    {edu.logo && (
                      <div className="flex-shrink-0 mx-auto md:mx-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {edu.institution}
                        </h3>
                        <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4">
                          <div className="flex items-center justify-center md:justify-start text-blue-600 mb-2 md:mb-0">
                            <GraduationCap className="mr-2" size={18} />
                            <span className="font-medium">{edu.degree}</span>
                          </div>
                          {edu.location && (
                            <div className="flex items-center justify-center md:justify-start text-gray-600">
                              <MapPin className="mr-2" size={16} />
                              <span className="text-sm">{edu.location}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4">
                          <div className="flex items-center justify-center md:justify-start text-gray-700 mb-2 md:mb-0">
                            <CalendarDays className="mr-2" size={16} />
                            <span className="text-sm font-medium">{edu.period}</span>
                          </div>
                          {edu.gpa && (
                            <div className={`text-sm font-bold ${
                              edu.gpa.includes('3.93') || edu.gpa.includes('45/45') 
                                ? 'text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full' 
                                : 'text-blue-600 bg-blue-50 px-3 py-1 rounded-full'
                            }`}>
                              {edu.gpa}
                            </div>
                          )}
                        </div>
                        
                        {/* Achievements */}
                        {edu.achievements.length > 0 && (
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, achievementIndex) => (
                              <div key={achievementIndex} className="flex items-start text-left">
                                <Award className="mr-3 mt-0.5 text-yellow-500 flex-shrink-0" size={16} />
                                <span className="text-sm text-gray-700">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connector line (except for last item) */}
              {index < educationData.length - 1 && (
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
