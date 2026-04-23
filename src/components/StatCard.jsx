import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ label, value, change, trend, color }) => {
  return (
    <div className="stat-card h-100">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <span className="text-muted fw-medium">{label}</span>
        <div 
          className="p-2 rounded-3" 
          style={{ backgroundColor: `${color}15`, color: color }}
        >
          {trend === 'up' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
        </div>
      </div>
      <h3 className="fw-bold mb-1">{value}</h3>
      <div className="d-flex align-items-center gap-1">
        <span className={trend === 'up' ? 'text-success small' : 'text-danger small'}>
          {change}
        </span>
        <span className="text-muted small">from last month</span>
      </div>
    </div>
  );
};

export default StatCard;
