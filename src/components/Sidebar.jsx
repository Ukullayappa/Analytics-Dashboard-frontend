import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BarChart3, Users, Settings, LogOut, PieChart, FileText } from 'lucide-react';

const Sidebar = () => {
  const handleSignOut = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to sign out?")) {
      window.location.href = "/";
    }
  };

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
          <NavLink to="/" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={18} />
            <span>Overview</span>
          </NavLink>
          <NavLink to="/reports" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
            <BarChart3 size={18} />
            <span>Reports</span>
          </NavLink>
          <NavLink to="/audience" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
            <Users size={18} />
            <span>Audience</span>
          </NavLink>
          <NavLink to="/marketing" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
            <PieChart size={18} />
            <span>Marketing</span>
          </NavLink>
          <NavLink to="/documents" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
            <FileText size={18} />
            <span>Documents</span>
          </NavLink>
        </nav>

        <p className="text-uppercase text-muted fw-bold mb-3 mt-5 px-3" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>
          Support
        </p>
        <nav>
          <NavLink to="/settings" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      {/* Footer / User Area */}
      <div className="mt-auto pt-4 border-top">
        <a href="#" className="nav-link-custom text-danger" onClick={handleSignOut}>
          <LogOut size={18} />
          <span>Sign Out</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
