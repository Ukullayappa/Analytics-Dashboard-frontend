import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

// Placeholder Components for other routes
const Reports = () => (
  <div className="main-content">
    <h2 className="fw-bold mb-4">Reports</h2>
    <p className="text-muted">Detailed analytical reports will be displayed here.</p>
  </div>
);

const Audience = () => (
  <div className="main-content">
    <h2 className="fw-bold mb-4">Audience Analytics</h2>
    <p className="text-muted">Insights about your audience and users.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="dashboard-layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/audience" element={<Audience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
