import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Container, Badge } from 'react-bootstrap';
import { Search, Bell, User, Calendar, Filter, Download } from 'lucide-react';
import StatCard from './StatCard';
import AnalyticsChart from './AnalyticsChart';
import RecentActivity from './RecentActivity';

let API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
if (API_BASE && !API_BASE.endsWith('/api')) {
  API_BASE = API_BASE.endsWith('/') ? `${API_BASE}api` : `${API_BASE}/api`;
}

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, chartRes, activityRes] = await Promise.all([
          axios.get(`${API_BASE}/dashboard/stats`),
          axios.get(`${API_BASE}/dashboard/chart-data`),
          axios.get(`${API_BASE}/dashboard/recent-activity`)
        ]);
        setStats(statsRes.data);
        setChartData(chartRes.data);
        setActivity(activityRes.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      {/* Top Header */}
      <header className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-3">
        <div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <h2 className="fw-bold mb-0">Executive Overview</h2>
            <Badge bg="primary" className="rounded-pill px-2 py-1" style={{ fontSize: '0.6rem' }}>LIVE</Badge>
          </div>
          <p className="text-muted mb-0 small">Real-time performance monitoring and data analysis.</p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-light border d-flex align-items-center gap-2 px-3 rounded-3 shadow-sm">
            <Calendar size={16} />
            <span className="small fw-semibold">
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </button>
          <button 
            className="btn btn-primary d-flex align-items-center gap-2 px-3 rounded-3 shadow-sm"
            onClick={() => alert('Exporting dashboard data to PDF...')}
          >
            <Download size={16} />
            <span className="small fw-semibold">Export Report</span>
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <Row className="g-4 mb-5">
        {stats.map((stat) => (
          <Col key={stat.id} lg={3} md={6}>
            <StatCard {...stat} />
          </Col>
        ))}
      </Row>

      {/* Main Analytics Section */}
      <Row className="g-4 mb-5">
        <Col lg={8}>
          <AnalyticsChart data={chartData} />
        </Col>
        <Col lg={4}>
          <div className="chart-container h-100 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">Distribution</h5>
              <Filter size={18} className="text-muted cursor-pointer" />
            </div>
            <div className="flex-grow-1 d-flex flex-column justify-content-center gap-4">
              {[
                { name: 'Organic Search', value: 52, color: '#2563eb' },
                { name: 'Direct Traffic', value: 24, color: '#10b981' },
                { name: 'Social Media', value: 14, color: '#f59e0b' },
                { name: 'Referral', value: 10, color: '#64748b' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="small fw-semibold text-sidebar">{item.name}</span>
                    <span className="small text-muted">{item.value}%</span>
                  </div>
                  <div className="progress" style={{ height: '8px', backgroundColor: '#f1f5f9' }}>
                    <div 
                      className="progress-bar rounded-pill" 
                      role="progressbar" 
                      style={{ 
                        width: `${item.value}%`, 
                        backgroundColor: item.color,
                        boxShadow: `0 0 10px ${item.color}20` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      {/* Recent Activity Table */}
      <Row>
        <Col xs={12}>
          <RecentActivity activity={activity} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
