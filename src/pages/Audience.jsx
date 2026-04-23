import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Users, UserCheck, UserPlus, Zap } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const pieData = [
  { name: 'Mobile', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Tablet', value: 100 },
];
const COLORS = ['#2563eb', '#10b981', '#f59e0b'];

const Audience = () => {
  return (
    <div className="main-content animate-fade-in">
      <header className="mb-5">
        <h2 className="fw-bold mb-1">Audience Overview</h2>
        <p className="text-muted small">Understand who your users are and how they interact with your platform.</p>
      </header>

      <Row className="g-4 mb-5">
        {[
          { label: 'Total Visitors', value: '142.5k', icon: Users, color: '#2563eb' },
          { label: 'Active Users', value: '12.8k', icon: UserCheck, color: '#10b981' },
          { label: 'New Signups', value: '1.2k', icon: UserPlus, color: '#f59e0b' },
          { label: 'Engagement Rate', value: '64.2%', icon: Zap, color: '#ef4444' }
        ].map((stat, i) => (
          <Col key={i} md={3}>
            <div className="stat-card">
              <div className="d-flex align-items-center gap-3">
                <div className="p-3 rounded-circle" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-muted small fw-medium">{stat.label}</div>
                  <h4 className="fw-bold mb-0">{stat.value}</h4>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="g-4">
        <Col lg={4}>
          <div className="chart-container">
            <h5 className="fw-bold mb-4">Device Breakdown</h5>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-3">
              {pieData.map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-2">
                  <div className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: COLORS[i] }}></div>
                  <span className="small text-muted">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <div className="chart-container h-100">
            <h5 className="fw-bold mb-4">Top Locations</h5>
            <div className="d-flex flex-column gap-4">
              {[
                { country: 'United States', users: '45,200', pct: 45 },
                { country: 'India', users: '24,100', pct: 24 },
                { country: 'United Kingdom', users: '12,500', pct: 12 },
                { country: 'Canada', users: '9,200', pct: 9 }
              ].map((loc, i) => (
                <div key={i}>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold small">{loc.country}</span>
                    <span className="text-muted small">{loc.users} users</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar rounded-pill" style={{ width: `${loc.pct}%`, backgroundColor: '#2563eb' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Audience;
