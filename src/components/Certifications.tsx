import React from 'react';
import { 
  Brain,
  Globe,
  Calculator,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
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
            
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">CFA Program Level I</h4>
              <p className="text-gray-600 text-sm mb-3">Chartered Financial Analyst</p>
              <a 
                href="https://credentials.cfainstitute.org/4182a638-0f41-49b6-a7eb-d3d3143d1851" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 hover:text-green-700 text-xs font-medium transition-colors duration-200"
              >
                View Credential <ExternalLink size={12} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;