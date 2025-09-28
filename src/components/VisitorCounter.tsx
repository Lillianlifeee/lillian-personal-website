import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const VisitorCounter: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    // 获取总访问量，每次访问自动加1
    const totalVisits = localStorage.getItem('website_total_visits');
    const newTotalCount = totalVisits ? parseInt(totalVisits) + 1 : 1;
    localStorage.setItem('website_total_visits', newTotalCount.toString());
    setVisitCount(newTotalCount);
  }, []);

  return (
    <div className="px-6 py-4 rounded-lg">
      <div className="flex items-center justify-center gap-2 text-sm">
        <Users size={18} className="text-white" />
        <span className="font-medium text-white">Total Visits:</span>
        <span className="font-bold text-white text-lg">{visitCount.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default VisitorCounter;