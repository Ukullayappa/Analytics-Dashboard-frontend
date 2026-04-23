import React from 'react';
import { Row, Col, Table, Form, InputGroup } from 'react-bootstrap';
import { File, FileText, FileSpreadsheet, FileImage, Search, MoreVertical, Clock, Star } from 'lucide-react';

const Documents = () => {
  const docs = [
    { name: 'Financial_Report_2025.pdf', type: 'PDF', size: '2.5 MB', date: 'Oct 12, 2025', owner: 'Ismail', icon: FileText, color: '#ef4444' },
    { name: 'Marketing_Strategy.docx', type: 'Doc', size: '1.2 MB', date: 'Oct 15, 2025', owner: 'Sai Kumar', icon: File, color: '#2563eb' },
    { name: 'User_Research_Data.xlsx', type: 'Excel', size: '4.8 MB', date: 'Oct 18, 2025', owner: 'Sadha', icon: FileSpreadsheet, color: '#10b981' },
    { name: 'Dashboard_Mockup.png', type: 'Image', size: '12.4 MB', date: 'Oct 20, 2025', owner: 'Kullayappa', icon: FileImage, color: '#f59e0b' },
    { name: 'API_Documentation.pdf', type: 'PDF', size: '850 KB', date: 'Oct 22, 2025', owner: 'UKULL', icon: FileText, color: '#ef4444' },
  ];

  return (
    <div className="main-content animate-fade-in">
      <header className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h2 className="fw-bold mb-1">Document Manager</h2>
          <p className="text-muted small">Access and manage all your project documents in one place.</p>
        </div>
        <div className="d-flex gap-2">
          <InputGroup className="shadow-sm">
            <InputGroup.Text className="bg-white border-end-0"><Search size={16} className="text-muted" /></InputGroup.Text>
            <Form.Control placeholder="Search documents..." className="border-start-0 ps-0" style={{ width: '250px' }} />
          </InputGroup>
          <button 
            className="btn btn-primary px-4 rounded-3 fw-semibold"
            onClick={() => alert('Opening file uploader...')}
          >
            Upload
          </button>
        </div>
      </header>

      <Row className="g-4 mb-5">
        <Col md={4}>
          <div className="stat-card p-4 d-flex align-items-center gap-3">
            <div className="bg-light p-3 rounded-3"><Star className="text-warning" fill="#f59e0b" /></div>
            <div>
              <h5 className="fw-bold mb-0">Starred</h5>
              <p className="text-muted small mb-0">12 important files</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="stat-card p-4 d-flex align-items-center gap-3">
            <div className="bg-light p-3 rounded-3"><Clock className="text-primary" /></div>
            <div>
              <h5 className="fw-bold mb-0">Recent</h5>
              <p className="text-muted small mb-0">45 files viewed this week</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="stat-card p-4 d-flex align-items-center gap-3">
            <div className="bg-light p-3 rounded-3"><File className="text-success" /></div>
            <div>
              <h5 className="fw-bold mb-0">Total Files</h5>
              <p className="text-muted small mb-0">1,240 documents</p>
            </div>
          </div>
        </Col>
      </Row>

      <div className="data-table-container">
        <Table hover responsive className="mb-0">
          <thead>
            <tr>
              <th className="ps-4">File Name</th>
              <th>Type</th>
              <th>Size</th>
              <th>Last Modified</th>
              <th>Owner</th>
              <th className="text-end pe-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((doc, i) => (
              <tr key={i} className="align-middle">
                <td className="ps-4">
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ color: doc.color }}><doc.icon size={22} /></div>
                    <span className="fw-semibold small">{doc.name}</span>
                  </div>
                </td>
                <td><span className="badge bg-light text-muted border small">{doc.type}</span></td>
                <td className="text-muted small">{doc.size}</td>
                <td className="text-muted small">{doc.date}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 24, height: 24, fontSize: 10 }}>{doc.owner[0]}</div>
                    <span className="small">{doc.owner}</span>
                  </div>
                </td>
                <td className="text-end pe-4">
                  <MoreVertical size={18} className="text-muted cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Documents;
