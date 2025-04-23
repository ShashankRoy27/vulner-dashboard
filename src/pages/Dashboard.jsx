// src/pages/Dashboard.jsx
import React, { useState } from "react";
import useDashboardStore from "../store/dashboardStore";
import Widget from "../components/widget";
import DashboardHeader from "../components/DashboardHeader"; // ✅ Already imported, so we just use it below

const Dashboard = () => {
  const { categories, addWidget, removeWidget } = useDashboardStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories
    .map((category) => {
      const filteredWidgets = category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return filteredWidgets.length > 0
        ? { ...category, widgets: filteredWidgets }
        : null;
    })
    .filter(Boolean);

  return (
    <div className="dashboard">
      {/* ✅ Add the header here */}
      <DashboardHeader />

      <h1>CNAPP Dashboard</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search widgets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      {filteredCategories.length === 0 ? (
        <p>No widgets found matching "{searchQuery}"</p>
      ) : (
        filteredCategories.map((category) => (
          <Widget
            key={category.name}
            category={category}
            addWidget={addWidget}
            removeWidget={removeWidget}
            isSearching={searchQuery.trim() !== ""}
          />
        ))
      )}

      <style>{`
        .search-container {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 1rem;
        }

        .search-bar {
          width: 300px;
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 14px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          transition: border-color 0.2s ease;
        }

        .search-bar:focus {
          border-color: #6366f1; /* nice blue-purple tint */
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
