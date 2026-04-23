import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { Target, TrendingUp, MousePointer2, Share2, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', spend: 400, conv: 240 },
  { name: 'Tue', spend: 300, conv: 139 },
  { name: 'Wed', spend: 200, conv: 980 },
  { name: 'Thu', spend: 278, conv: 390 },
  { name: 'Fri', spend: 189, conv: 480 },
  { name: 'Sat', spend: 239, conv: 380 },
  { name: 'Sun', spend: 349, conv: 430 },
];

const Marketing = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 300 });

  useEffect(() => {
    const observeTarget = containerRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0].contentRect.width > 0) {
        setDimensions({
          width: entries[0].contentRect.width,
          height: 300
        });
      }
    });

    if (observeTarget) {
      resizeObserver.observe(observeTarget);
    }

    return () => {
      if (observeTarget) {
        resizeObserver.unobserve(observeTarget);
      }
    };
  }, []);

  return (
    <div className="main-content animate-fade-in">
      <header className="mb-5">
        <h2 className="fw-bold mb-1">Marketing Campaigns</h2>
        <p className="text-muted small">Track your advertising spend and campaign performance.</p>
      </header>

      <Row className="g-4 mb-5">
        {[
          { label: 'Total Spend', value: '$12,450', icon: DollarSign, color: '#2563eb', change: '+12%' },
          { label: 'Conversions', value: '842', icon: Target, color: '#10b981', change: '+8%' },
          { label: 'CTR', value: '4.2%', icon: MousePointer2, color: '#f59e0b', change: '+1.2%' },
          { label: 'Engagement', value: '25.4k', icon: Share2, color: '#ef4444', change: '+18%' }
        ].map((stat, i) => (
          <Col key={i} md={3}>
            <div className="stat-card">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="p-2 rounded-3" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                  <stat.icon size={20} />
                </div>
                <span className="text-success small fw-bold">{stat.change}</span>
              </div>
              <div className="text-muted small fw-medium">{stat.label}</div>
              <h3 className="fw-bold mb-0">{stat.value}</h3>
            </div>
          </Col>
        ))}
      </Row>

      <div className="chart-container mb-5">
        <h5 className="fw-bold mb-4">Spend vs Conversions</h5>
        <div ref={containerRef} style={{ width: '100%', height: 300 }}>
          {dimensions.width > 0 && (
            <LineChart width={dimensions.width} height={dimensions.height} data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: 'var(--shadow)' }} />
              <Line type="monotone" dataKey="spend" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="conv" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          )}
        </div>
      </div>

      <Row className="g-4">
        <Col lg={6}>
          <div className="data-table-container p-4">
            <h5 className="fw-bold mb-4">Active Channels</h5>
            <div className="d-flex flex-column gap-4">
              {[
                { name: 'Google Ads', spend: '$5,200', perf: 85, color: '#2563eb' },
                { name: 'Facebook Ads', spend: '$3,100', perf: 62, color: '#10b981' },
                { name: 'LinkedIn Ads', spend: '$2,800', perf: 45, color: '#0077b5' },
                { name: 'Twitter Ads', spend: '$1,350', perf: 30, color: '#1da1f2' }
              ].map((c, i) => (
                <div key={i}>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold small">{c.name} ({c.spend})</span>
                    <span className="text-muted small">Efficiency: {c.perf}%</span>
                  </div>
                  <ProgressBar now={c.perf} style={{ height: '6px' }} />
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="data-table-container p-4">
            <h5 className="fw-bold mb-4">Campaign Goals</h5>
            <div className="d-flex flex-column gap-4">
              {[
                { name: 'Brand Awareness', goal: '100k Reach', current: '82k', pct: 82 },
                { name: 'Product Sales', goal: '500 Orders', current: '342', pct: 68 },
                { name: 'New Signups', goal: '200 Users', current: '185', pct: 92 }
              ].map((g, i) => (
                <div key={i} className="p-3 border rounded-3 bg-light">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold small">{g.name}</span>
                    <span className="badge bg-primary rounded-pill">{g.pct}%</span>
                  </div>
                  <div className="text-muted extra-small mb-2">Goal: {g.goal} • Current: {g.current}</div>
                  <ProgressBar now={g.pct} variant="primary" style={{ height: '4px' }} />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Marketing;
