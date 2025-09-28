import React from 'react';
import { Trophy, Medal, Award, Users, Target, Star, Crown, TrendingUp, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "ACCA Business Competition",
      rank: "Champion",
      year: "2022/23",
      category: "Business Strategy",
      description: "Assisted the group leader and 4 teammates to propose an interactive metaverse strategy, NFT investment, NFT auction and AR postcards",
      teamSize: 5,
      skills: ["Strategic Planning", "Metaverse Strategy", "NFT Analysis", "AR Technology", "Team Leadership"],
      impact: "First place among all participating teams",
      icon: Crown,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      highlight: true
    },
    {
      title: "HSBC Life Insurance Innovation Competition",
      rank: "1st Runner-up",
      year: "2023",
      category: "Fintech Innovation",
      description: "Led 4 teammates for a mental health-related insurance proposal, including the AI Smart Match System and Augmented Reality (AR) scanning",
      teamSize: 5,
      skills: ["Insurance Innovation", "AI System Design", "Mental Health Solutions", "AR Technology", "Team Leadership"],
      impact: "First runner-up with innovative healthcare technology solution",
      icon: Medal,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      highlight: true
    },
    {
      title: "Deloitte Digital Camp",
      rank: "2nd Runner-up",
      year: "2025",
      category: "Technology Development",
      description: "Spearheaded the full-stack development of the PulseCast web application - a live-streaming sales forecasting system, engineering both the responsive user interface and the back-end server logic",
      teamSize: "Team Leader",
      skills: ["Full-Stack Development", "Sales Forecasting", "Live Streaming Technology", "UI/UX Design", "Backend Architecture"],
      impact: "Third place with fully functional web application",
      githubUrl: "https://github.com/Lillianlifeee/PulseCast",
      icon: Trophy,
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      highlight: true
    },
    {
      title: "BOCHK Challenge",
      rank: "2nd Runner-up",
      year: "2023",
      category: "Fintech & Sustainability",
      description: "Designed our Robo-Advisor for customized, detailed green financing portfolio",
      teamSize: "Team Member",
      skills: ["Robo-Advisor Design", "Green Finance", "Portfolio Management", "ESG Analysis", "Financial Technology"],
      impact: "Third place with sustainable finance solution",
      icon: Target,
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      highlight: false
    },
    {
      title: "McDonough Business Strategy Challenge (MBSC)",
      rank: "Bracket Runner-up",
      year: "2024",
      category: "Business Consulting",
      description: "Led storytelling for a restructuring strategy for an NGO, designed a dashboard and analyzed cash flow performance",
      teamSize: "Team Leader",
      skills: ["Business Strategy", "NGO Management", "Dashboard Design", "Cash Flow Analysis", "Storytelling"],
      impact: "Runner-up position in business case competition",
      icon: TrendingUp,
      color: "from-purple-400 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      highlight: false
    }
  ];

  const specialAchievements = [
    {
      title: "International Case Competition Representative",
      description: "Selected as one of the 16 HKU representatives",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "HKU Investment Banking Club Member",
      description: "Attended seminars and workshops conducted by industry professionals, networked with professionals and alumni",
      icon: Star,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Main Competition Awards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {achievements.filter(a => a.highlight).map((achievement, index) => (
              <div 
                key={index}
                className="group relative transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`h-full bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${achievement.borderColor} hover:shadow-xl`}>
                  {/* Award Header */}
                  <div className={`bg-gradient-to-r ${achievement.color} px-6 py-4`}>
                    <div className="flex items-center justify-center text-white">
                      <achievement.icon size={24} className="mr-2" />
                      <span className="font-bold text-lg">{achievement.rank}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Competition Details */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {achievement.title}
                      </h3>
                      <div className="flex justify-center items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                          {achievement.year}
                        </span>
                        <span className={`${achievement.bgColor} px-3 py-1 rounded-full font-medium`}>
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 text-center">
                      {achievement.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3 text-center">
                        Key Skills Demonstrated
                      </h4>
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {achievement.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs font-medium border border-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Impact */}
                    <div className={`${achievement.bgColor} rounded-lg p-3 text-center`}>
                      <p className="text-sm font-medium text-gray-700">
                        {achievement.impact}
                      </p>
                    </div>
                    
                    {/* GitHub Link */}
                    {achievement.githubUrl && (
                      <div className="mt-4 text-center">
                        <a
                          href={achievement.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                          <ExternalLink className="mr-2" size={16} />
                          View on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.filter(a => !a.highlight).map((achievement, index) => (
              <div 
                key={index}
                className="group relative transform hover:scale-[1.01] transition-all duration-300"
              >
                <div className={`h-full bg-white rounded-xl shadow-md overflow-hidden border ${achievement.borderColor} hover:shadow-lg`}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${achievement.bgColor} flex-shrink-0`}>
                        <achievement.icon size={24} className="text-gray-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {achievement.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                          <span className="font-semibold text-orange-600">{achievement.rank}</span>
                          <span>•</span>
                          <span>{achievement.year}</span>
                          <span>•</span>
                          <span className="text-blue-600">{achievement.category}</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {achievement.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {achievement.skills.slice(0, 4).map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs font-medium border border-gray-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Special Recognition */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Special Recognition & Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialAchievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <achievement.icon size={20} className={achievement.color} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
