import React from 'react';
import { Row, Col, Table, Badge } from 'react-bootstrap';
import { FileText, Download, Filter, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sales Q1', value: 400 },
  { name: 'User Growth', value: 300 },
  { name: 'Revenue', value: 600 },
  { name: 'Marketing', value: 200 },
  { name: 'Support', value: 100 },
];

const Reports = () => {
  return (
    <div className="main-content animate-fade-in">
      <header className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h2 className="fw-bold mb-1">Analytical Reports</h2>
          <p className="text-muted mb-0 small">Manage and generate your business intelligence reports.</p>
        </div>
        <button 
          className="btn btn-primary d-flex align-items-center gap-2 px-3 rounded-3 shadow-sm"
          onClick={() => alert('Opening report generator...')}
        >
          <FileText size={18} />
          <span className="small fw-semibold">Generate New Report</span>
        </button>
      </header>

      <Row className="g-4 mb-5">
        <Col lg={8}>
          <div className="chart-container">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">Report Frequency</h5>
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-light border"><Calendar size={14} /></button>
                <button className="btn btn-sm btn-light border"><Filter size={14} /></button>
              </div>
            </div>
            <div style={{ width: '100%', minWidth: 0 }}>
              <ResponsiveContainer width="100%" aspect={2.5} minWidth={0}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: 'var(--shadow)' }} />
                  <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="chart-container h-100">
            <h5 className="fw-bold mb-4">Recent Downloads</h5>
            <div className="d-flex flex-column gap-3">
              {[
                { name: 'Monthly_Sales_Dec.pdf', size: '2.4 MB', date: '2 hours ago' },
                { name: 'User_Feedback_Q4.csv', size: '1.1 MB', date: 'Yesterday' },
                { name: 'Marketing_ROI_Final.xlsx', size: '4.8 MB', date: '3 days ago' },
                { name: 'Annual_Tax_Report.pdf', size: '12.5 MB', date: '1 week ago' }
              ].map((file, idx) => (
                <div key={idx} className="d-flex align-items-center justify-content-between p-2 rounded-3 border-bottom">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light p-2 rounded-2 text-primary">
                      <FileText size={20} />
                    </div>
                    <div>
                      <div className="small fw-bold text-main">{file.name}</div>
                      <div className="text-muted" style={{ fontSize: '0.7rem' }}>{file.size} • {file.date}</div>
                    </div>
                  </div>
                  <Download size={16} className="text-muted cursor-pointer hover-primary" />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      <div className="data-table-container">
        <div className="p-4 border-bottom">
          <h5 className="fw-bold mb-0">Scheduled Reports</h5>
        </div>
        <Table hover className="mb-0">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Frequency</th>
              <th>Last Run</th>
              <th>Next Run</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Weekly Revenue Audit', freq: 'Weekly', last: 'Dec 21', next: 'Dec 28', status: 'Active' },
              { name: 'Customer Retention', freq: 'Monthly', last: 'Nov 30', next: 'Dec 30', status: 'Pending' },
              { name: 'System Performance', freq: 'Daily', last: 'Today', next: 'Tomorrow', status: 'Active' }
            ].map((r, i) => (
              <tr key={i}>
                <td className="fw-semibold small">{r.name}</td>
                <td className="text-muted small">{r.freq}</td>
                <td className="text-muted small">{r.last}</td>
                <td className="text-muted small">{r.next}</td>
                <td>
                  <Badge bg={r.status === 'Active' ? 'success' : 'warning'} className="rounded-pill px-3">
                    {r.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Reports;
