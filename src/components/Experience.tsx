import React from 'react';
import { Briefcase, MapPin, CalendarDays, TrendingUp, Users, Database, Calculator } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Neuberger Berman",
      logo: "/images/neuberger_berman_logo.png",
      position: "Private Equity Intern",
      period: "Sep 2025 - Jan 2026",
      location: "Hong Kong",
      type: "Private Equity",
      responsibilities: [
        "Contributed to the privatization of TechnoPro (6028.T) through supporting co-investment analysis, including return assessment using LBO frameworks, value chain analysis, and investment due diligence. The transaction was successfully closed in December 2025 with a deal size of approximately USD 3.5 billion",
        "Delivered a 30-page report in PPT format on the China market. Used Bloomberg and CapitalIQ and sourced macro-economic data (such as GDP, M2, PMI), 10+ iconic capital market deals, and key sector analysis (consumer, AI, and supply chain)",
        "Analyzed and compared 5 primary funds using quantitative performance metrics (IRR, DPI, TVPI) and qualitative deal analysis, supporting senior management in selecting top-performing GPs"
      ],
      skills: ["LBO Modeling", "Due Diligence", "Bloomberg & CapitalIQ", "Fund Analysis"],
      highlight: true
    },
    {
      company: "Goldman Sachs",
      logo: "/images/goldman_sachs_logo.png",
      position: "Summer Legal Entity Control Intern",
      period: "Summer 2024",
      location: "Hong Kong",
      type: "Investment Banking",
      responsibilities: [
        "Used Excel macros and VBA to perform daily regulatory liquid capital calculations and learned to explain day-to-day liquidity capital variance based on market movements and balance sheet shifts",
        "Automated the Transfer Pricing percentage assessment process, reducing manual effort and saving ≈15-20 hours per month",
        "Streamlined the dissemination of break reports by automating materiality-based filtering for different departments"
      ],
      skills: ["Excel VBA", "Financial Modeling", "Regulatory Compliance", "Process Automation"],
      highlight: true
    },
    {
      company: "Purekind Fund",
      logo: null,
      position: "Winter Equity Research Intern",
      period: "Dec 2024 - Jan 2025",
      location: "Hong Kong",
      type: "Asset Management",
      responsibilities: [
        "Constructed a financial model for A-share company Top Cloud-Agri, analyzing how its tech stack (e.g., IoT platforms, AI recognition models) and client base justified its PE valuation multiples relative to peers",
        "Designed and managed a structured industry database to track company KPIs for use in quantitative financial models"
      ],
      skills: ["Financial Modeling", "Equity Research", "Database Management", "Valuation Analysis"],
      highlight: false
    },
    {
      company: "Banco Santander",
      logo: "/images/banco_santander_logo_red_black.png",
      position: "Summer Financial Control Intern",
      period: "Jun 2024 - Aug 2024",
      location: "Hong Kong",
      type: "Banking",
      responsibilities: [
        "Supported automation and development of financial planning and risk management models through Macro in Excel",
        "Assisted in accounting, regulatory reporting, and financial forecasting for Balance Sheet, P/L, and capital consumption",
        "Conducted asset and liability reconciliation and monitored daily liquidity ratios and completed 60+ daily reports"
      ],
      skills: ["Risk Management", "Financial Planning", "Regulatory Reporting", "Excel Automation"],
      highlight: false
    },
    {
      company: "BDO China Shu Lun Pan Certified Public Accountants LLP",
      logo: null,
      position: "Audit Intern",
      period: "Summer 2023",
      location: "China",
      type: "Audit & Assurance",
      responsibilities: [
        "Participated in on-site audit of two clients from the medical devices and the logistic industries",
        "Performed stock take at 10 factories for 10 days, and verified compliance with standards like GAAP and IFRS"
      ],
      skills: ["Audit Procedures", "GAAP/IFRS", "Compliance Verification", "Financial Analysis"],
      highlight: false
    },
    {
      company: "China Capital Management Co., Ltd.",
      logo: null,
      position: "Summer Investment Intern",
      period: "Summer 2023",
      location: "China",
      type: "Investment Management",
      responsibilities: [
        "Conducted extensive research on the CITIC Prudential REITs project and focused on the logistic REITs project, sorted out relevant shareholder structure, revenue stream, tenant mix, etc., and produced a PPT of 20 pages",
        "Analyzed key aspects of the REIT project such as market trends, tenant profiles, and property management practices",
        "Researched different REITs models (e.g. Quasi-REITs, Pre-REITs), crafted and presented a 21-page report"
      ],
      skills: ["Investment Research", "REITs Analysis", "Market Research", "Presentation Skills"],
      highlight: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Private Equity': return 'bg-rose-100 text-rose-800';
      case 'Investment Banking': return 'bg-blue-100 text-blue-800';
      case 'Asset Management': return 'bg-green-100 text-green-800';
      case 'Banking': return 'bg-purple-100 text-purple-800';
      case 'Audit & Assurance': return 'bg-orange-100 text-orange-800';
      case 'Investment Management': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div id="experience" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`mb-8 relative ${
                exp.highlight ? 'transform hover:scale-[1.01]' : 'hover:scale-[1.005]'
              } transition-all duration-300`}
            >
              <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${
                exp.highlight 
                  ? 'border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-white' 
                  : 'border-gray-200 hover:shadow-xl'
              }`}>
                {exp.highlight && (
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3">
                    <div className="flex items-center text-white text-sm font-medium">
                      <TrendingUp className="mr-2" size={16} />
                      Featured Experience - Global Investment Bank
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      {exp.logo ? (
                        <div className="w-16 h-16 bg-white rounded-lg shadow-md p-2 flex items-center justify-center mx-auto lg:mx-0">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md flex items-center justify-center mx-auto lg:mx-0">
                          <Briefcase className="text-gray-500" size={24} />
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-center lg:text-left">
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {exp.company}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-3">
                            <div className="flex items-center justify-center lg:justify-start text-blue-600 mb-2 sm:mb-0">
                              <Briefcase className="mr-2" size={18} />
                              <span className="font-semibold">{exp.position}</span>
                            </div>
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                              {exp.type}
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-gray-600 text-sm">
                            <div className="flex items-center justify-center lg:justify-start mb-2 sm:mb-0">
                              <CalendarDays className="mr-2" size={16} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start">
                              <MapPin className="mr-2" size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center justify-center lg:justify-start">
                            <Users className="mr-2" size={18} />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-3 text-left">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm leading-relaxed">
                                  {responsibility}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Skills */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center justify-center lg:justify-start">
                            <Database className="mr-2" size={18} />
                            Skills Applied
                          </h4>
                          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {exp.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
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
              </div>
              
              {/* Connector line */}
              {index < experiences.length - 1 && (
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

export default Experience;
