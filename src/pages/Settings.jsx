import React, { useState } from 'react';
import { Row, Col, Form, Button, Card, Table } from 'react-bootstrap';
import { User, Bell, Lock, Globe, Shield, Save } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile Information', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security & Password', icon: Lock },
    { id: 'language', label: 'Language & Region', icon: Globe },
    { id: 'privacy', label: 'Privacy Settings', icon: Shield }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="animate-fade-in">
            <h5 className="fw-bold mb-4">Profile Details</h5>
            <Form>
              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small fw-bold text-muted">Full Name</Form.Label>
                    <Form.Control type="text" defaultValue="UKULLAYAPPA" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small fw-bold text-muted">Email Address</Form.Label>
                    <Form.Control type="email" defaultValue="ukull@example.com" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Label className="small fw-bold text-muted">Bio</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue="Lead Data Analyst and Software Developer." />
              </Form.Group>
              <Button variant="primary" className="px-4 fw-semibold shadow-sm">Save Profile</Button>
            </Form>
          </div>
        );
      case 'notifications':
        return (
          <div className="animate-fade-in">
            <h5 className="fw-bold mb-4">Notification Preferences</h5>
            <div className="d-flex flex-column gap-4">
              {[
                { title: 'Email Notifications', desc: 'Receive daily summary and report updates.' },
                { title: 'Push Notifications', desc: 'Get instant alerts in your browser.' },
                { title: 'SMS Alerts', desc: 'Critical system alerts sent to your phone.' }
              ].map((item, i) => (
                <div key={i} className="d-flex justify-content-between align-items-center p-3 bg-light rounded-3">
                  <div>
                    <div className="fw-bold small">{item.title}</div>
                    <div className="text-muted extra-small">{item.desc}</div>
                  </div>
                  <Form.Check type="switch" defaultChecked={i < 2} />
                </div>
              ))}
            </div>
            <Button variant="primary" className="px-4 fw-semibold shadow-sm mt-5">Save Preferences</Button>
          </div>
        );
      case 'security':
        return (
          <div className="animate-fade-in">
            <h5 className="fw-bold mb-4">Password & Security</h5>
            <Form className="mb-5">
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold text-muted">Current Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold text-muted">New Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button variant="primary" className="px-4 fw-semibold shadow-sm">Update Password</Button>
            </Form>
            <div className="p-3 border border-warning rounded-3 bg-warning-light">
              <div className="fw-bold text-warning-emphasis small mb-1">Two-Factor Authentication</div>
              <p className="text-muted extra-small mb-3">Add an extra layer of security to your account.</p>
              <Button variant="outline-warning" size="sm">Enable 2FA</Button>
            </div>
          </div>
        );
      case 'language':
        return (
          <div className="animate-fade-in">
            <h5 className="fw-bold mb-4">Regional Settings</h5>
            <Form.Group className="mb-4">
              <Form.Label className="small fw-bold text-muted">Primary Language</Form.Label>
              <Form.Select>
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>Hindi</option>
                <option>Telugu</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="small fw-bold text-muted">Timezone</Form.Label>
              <Form.Select defaultValue="IST">
                <option value="IST">(UTC+05:30) India Standard Time</option>
                <option value="EST">(UTC-05:00) Eastern Standard Time</option>
                <option value="GMT">(UTC+00:00) Greenwich Mean Time</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" className="px-4 fw-semibold shadow-sm">Apply Changes</Button>
          </div>
        );
      case 'privacy':
        return (
          <div className="animate-fade-in">
            <h5 className="fw-bold mb-4">Privacy & Visibility</h5>
            <div className="d-flex flex-column gap-3">
              <div className="p-3 border rounded-3">
                <Form.Check 
                  type="checkbox"
                  label="Make my profile public to other team members"
                  defaultChecked
                  className="small fw-bold"
                />
                <p className="text-muted extra-small ms-4 mb-0">Allow others to see your name and active status.</p>
              </div>
              <div className="p-3 border rounded-3">
                <Form.Check 
                  type="checkbox"
                  label="Allow data collection for product improvement"
                  className="small fw-bold"
                />
                <p className="text-muted extra-small ms-4 mb-0">Help us make DataPulse better by sharing usage stats.</p>
              </div>
            </div>
            <Button variant="primary" className="px-4 fw-semibold shadow-sm mt-5">Save Privacy</Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-content animate-fade-in">
      <header className="mb-5">
        <h2 className="fw-bold mb-1">Account Settings</h2>
        <p className="text-muted small">Configure your account, security, and notification preferences.</p>
      </header>

      <Row className="g-4">
        <Col lg={4}>
          <div className="d-flex flex-column gap-2">
            {tabs.map((tab) => (
              <div 
                key={tab.id} 
                onClick={() => setActiveTab(tab.id)}
                className={`p-3 rounded-3 cursor-pointer d-flex align-items-center gap-3 border transition-all ${activeTab === tab.id ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white text-sidebar hover-bg-light'}`}
                style={{ cursor: 'pointer' }}
              >
                <tab.icon size={18} />
                <span className="fw-semibold small">{tab.label}</span>
              </div>
            ))}
          </div>
        </Col>

        <Col lg={8}>
          <div className="chart-container" style={{ minHeight: '500px' }}>
            {renderContent()}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
