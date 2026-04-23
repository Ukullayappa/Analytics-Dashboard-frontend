import React from 'react';
import { LayoutDashboard, BarChart3, Users, Settings, LogOut, PieChart, FileText, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Brand Logo */}
      <div className="d-flex align-items-center mb-5 px-2">
        <div 
          className="bg-primary d-flex align-items-center justify-content-center rounded-3 me-3" 
          style={{ width: '40px', height: '40px' }}
        >
          <BarChart3 size={22} color="white" />
        </div>
        <div>
          <h5 className="logo-text mb-0 fw-bold" style={{ color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
            DataPulse
          </h5>
          <span className="logo-text text-muted small fw-medium">Analytics Engine</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-grow-1">
        <p className="text-uppercase text-muted fw-bold mb-3 px-3" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>
          Menu
        </p>
        <nav>
          <a href="#" className="nav-link-custom active">
            <LayoutDashboard size={18} />
            <span>Overview</span>
          </a>
          <a href="#" className="nav-link-custom">
            <BarChart3 size={18} />
            <span>Reports</span>
          </a>
          <a href="#" className="nav-link-custom">
            <Users size={18} />
            <span>Audience</span>
          </a>
          <a href="#" className="nav-link-custom">
            <PieChart size={18} />
            <span>Marketing</span>
          </a>
          <a href="#" className="nav-link-custom">
            <FileText size={18} />
            <span>Documents</span>
          </a>
        </nav>

        <p className="text-uppercase text-muted fw-bold mb-3 mt-5 px-3" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>
          Support
        </p>
        <nav>
          <a href="#" className="nav-link-custom">
            <Settings size={18} />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* Footer / User Area */}
      <div className="mt-auto pt-4 border-top">
        <a href="#" className="nav-link-custom text-danger">
          <LogOut size={18} />
          <span>Sign Out</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
