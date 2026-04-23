import React from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { User, Bell, Lock, Globe, Shield } from 'lucide-react';

const Settings = () => {
  return (
    <div className="main-content animate-fade-in">
      <header className="mb-5">
        <h2 className="fw-bold mb-1">Settings</h2>
        <p className="text-muted small">Manage your account preferences and system configurations.</p>
      </header>

      <Row className="g-4">
        <Col lg={4}>
          <div className="d-flex flex-column gap-3">
            {[
              { label: 'Profile Information', icon: User, active: true },
              { label: 'Notifications', icon: Bell, active: false },
              { label: 'Security & Password', icon: Lock, active: false },
              { label: 'Language & Region', icon: Globe, active: false },
              { label: 'Privacy Settings', icon: Shield, active: false }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`p-3 rounded-3 cursor-pointer d-flex align-items-center gap-3 border ${item.active ? 'bg-primary text-white border-primary' : 'bg-white text-sidebar'}`}
                style={{ transition: 'all 0.2s' }}
              >
                <item.icon size={20} />
                <span className="fw-semibold small">{item.label}</span>
              </div>
            ))}
          </div>
        </Col>

        <Col lg={8}>
          <div className="chart-container">
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

              <hr className="my-4" />

              <h5 className="fw-bold mb-4">System Preferences</h5>
              <Form.Check 
                type="switch"
                id="email-notif"
                label="Receive email notifications for new reports"
                defaultChecked
                className="mb-3 small fw-medium"
              />
              <Form.Check 
                type="switch"
                id="sms-notif"
                label="Receive SMS alerts for high-priority events"
                className="mb-4 small fw-medium"
              />

              <div className="d-flex justify-content-end gap-2 mt-5">
                <Button variant="light" className="border px-4 fw-semibold">Cancel</Button>
                <Button variant="primary" className="px-4 fw-semibold shadow-sm">Save Changes</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
