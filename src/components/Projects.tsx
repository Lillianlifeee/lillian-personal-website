import React from 'react';
import { BookOpen, ExternalLink, Calendar, FileText, TrendingUp, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Prediction of Bitcoin Daily Returns Based on OLS, XGBoost, and CNN Machine Learning Models",
      type: "Published Research Paper",
      status: "Independent First Author",
      publication: "International Conference on E-commerce and Artificial Intelligence (ECAI 2024)",
      period: "2024",
      description: "Advanced machine learning research applying multiple predictive models to cryptocurrency market analysis",
      paperUrl: "https://www.scitepress.org/Papers/2024/132124/132124.pdf",
      keyPoints: [
        "Normalized over 1,000 days of time-series data for comprehensive analysis",
        "Applied correlation analysis for optimal feature selection methodology",
        "Implemented and compared three distinct machine learning approaches: OLS regression, XGBoost ensemble method, and Convolutional Neural Networks",
        "Achieved significant predictive accuracy improvements over traditional financial models"
      ],
      technologies: ["Python", "Machine Learning", "Time Series Analysis", "XGBoost", "CNN", "Data Normalization"],
      impact: "Published in international conference, contributing to fintech research",
      category: "Machine Learning & Finance",
      highlight: true
    },
    {
      title: "An Empirical Study of the Fama–French 5-factor Model in Chinese A-Share Market",
      type: "Published Research Paper",
      status: "Independent First Author",
      publication: "Highlights in Business, Economics and Management, 2023",
      period: "2023",
      description: "Comprehensive empirical analysis testing the validity of the renowned Fama-French 5-factor model in the Chinese equity market",
      paperUrl: "https://drpress.org/ojs/index.php/HBEM/article/view/12360",
      keyPoints: [
        "Applied advanced econometric techniques using Excel and Stata for robust statistical analysis",
        "Tested the validity and performance of the Fama-French 5-factor model across Chinese A-share stocks",
        "Conducted comprehensive market analysis covering multiple time periods and market conditions",
        "Provided insights into the applicability of Western financial models in emerging markets"
      ],
      technologies: ["Stata", "Excel", "Econometric Analysis", "Statistical Modeling", "Financial Data Analysis"],
      impact: "Published research contributing to understanding of Chinese financial markets",
      category: "Financial Economics",
      highlight: true
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Machine Learning & Finance': return 'bg-purple-100 text-purple-800';
      case 'Financial Economics': return 'bg-blue-100 text-blue-800';
      case 'Financial Analysis & Technology': return 'bg-green-100 text-green-800';
      case 'Real Estate Finance': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div id="projects" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group relative ${
                  project.highlight ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`h-full bg-white rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 group-hover:shadow-xl ${
                  project.highlight 
                    ? 'border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white' 
                    : 'border-gray-200 hover:border-blue-200'
                }`}>
                  {/* Header */}
                  {project.highlight && (
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3">
                      <div className="flex items-center text-white text-sm font-medium">
                        <Brain className="mr-2" size={16} />
                        Featured Research - Published Work
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6 lg:p-8">
                    {/* Project Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold text-gray-800 leading-tight mb-2 ${
                            project.highlight ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'
                          }`}>
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                              {project.type}
                            </span>
                            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(project.category)}`}>
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <FileText className="mr-2" size={16} />
                          <span className="font-medium">{project.status}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-2" size={16} />
                          <span>{project.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      <div className="text-sm text-blue-600 font-medium mb-6">
                        <span className="flex items-center">
                          <BookOpen className="mr-2" size={16} />
                          {project.publication}
                        </span>
                      </div>
                    </div>
                    
                    {/* Key Points */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <TrendingUp className="mr-2" size={18} />
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {project.keyPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        Technologies & Methods
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Impact */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        Impact & Recognition
                      </h4>
                      <p className="text-sm text-gray-700">
                        {project.impact}
                      </p>
                      {project.paperUrl && (
                        <div className="mt-3">
                          <a
                            href={project.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                          >
                            <ExternalLink className="mr-2" size={16} />
                            Read Paper
                          </a>
                        </div>
                      )}
                    </div>
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

export default Projects;
