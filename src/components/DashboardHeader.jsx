import React from "react";
import { FiPlus, FiRefreshCw, FiMoreVertical, FiClock } from "react-icons/fi";
import "./DashboardHeader.css";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <h1 className="header-title">Vulnerability Dashboard</h1>

      <div className="header-buttons">
        <button className="btn add-widget">
          Add Widget <FiPlus className="icon" />
        </button>

        <button className="btn icon-only">
          <FiRefreshCw className="icon" />
        </button>

        <button className="btn icon-only">
          <FiMoreVertical className="icon" />
        </button>

        <button className="btn time-range">
          <FiClock className="icon" /> Last 2 days
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
