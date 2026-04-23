import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Reports from './pages/Reports';
import Audience from './pages/Audience';
import Marketing from './pages/Marketing';
import Documents from './pages/Documents';

function App() {
  return (
    <Router>
      <div className="dashboard-layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/audience" element={<Audience />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
