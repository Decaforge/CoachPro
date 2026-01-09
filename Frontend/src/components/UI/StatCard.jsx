import React from 'react';
import Card from './Card';

const StatCard = ({ icon: Icon, label, value, change, iconColor = 'bg-primary' }) => {
  const isPositive = change?.startsWith('+');
  
  return (
    <Card hover>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm mb-2">{label}</p>
          <p className="text-3xl font-bold text-white mb-2">{value}</p>
          {change && (
            <p className={`text-sm flex items-center gap-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              <span>{change}</span>
              <span className="text-gray-500">this month</span>
            </p>
          )}
        </div>
        <div className={`${iconColor} p-3 rounded-xl`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
