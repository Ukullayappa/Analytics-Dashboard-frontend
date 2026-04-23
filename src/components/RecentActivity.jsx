import React from 'react';
import { Table, Badge } from 'react-bootstrap';
import { MoreHorizontal } from 'lucide-react';

const RecentActivity = ({ activity }) => {
  return (
    <div className="data-table-container">
      <div className="p-4 border-bottom d-flex justify-content-between align-items-center">
        <div>
          <h5 className="fw-bold mb-1">Transaction History</h5>
          <p className="text-muted small mb-0">Latest transactions and system logs</p>
        </div>
        <button className="btn btn-light btn-sm border px-3">View All</button>
      </div>
      <div className="table-responsive">
        <Table hover className="mb-0">
          <thead>
            <tr>
              <th>Entity / User</th>
              <th>Action Details</th>
              <th>Timestamp</th>
              <th className="text-end">Status / Value</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {activity.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <div 
                      className="bg-light text-primary rounded-3 d-flex align-items-center justify-content-center me-3 fw-bold" 
                      style={{ width: '36px', height: '36px', border: '1px solid #e2e8f0' }}
                    >
                      {item.user.charAt(0)}
                    </div>
                    <div>
                      <div className="fw-semibold text-main small">{item.user}</div>
                      <div className="text-muted" style={{ fontSize: '0.7rem' }}>verified_account</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-sidebar small fw-medium">{item.action}</span>
                </td>
                <td>
                  <span className="text-muted small">{item.time}</span>
                </td>
                <td className="text-end">
                  {item.amount ? (
                    <span className={`fw-bold small ${item.amount.startsWith('-') ? 'text-danger' : 'text-success'}`}>
                      {item.amount}
                    </span>
                  ) : (
                    <Badge bg="light" className="text-muted border">LOGGED</Badge>
                  )}
                </td>
                <td className="text-center">
                  <MoreHorizontal size={18} className="text-muted cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RecentActivity;
