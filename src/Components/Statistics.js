import React from 'react';
import './Statistics.css';

function Statistics({ total, pending, completed }) {
  return (
    <div className="stats">
      <div className="stat-card">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-card">
        <span className="stat-number">{pending}</span>
        <span className="stat-label">Pending</span>
      </div>
      <div className="stat-card">
        <span className="stat-number">{completed}</span>
        <span className="stat-label">Done</span>
      </div>
    </div>
  );
}

export default Statistics;