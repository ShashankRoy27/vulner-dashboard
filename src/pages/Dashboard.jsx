import React, { useState } from "react";
import useDashboardStore from "../store/dashboardStore";

const Dashboard = () => {
  const { categories, addWidget, removeWidget } = useDashboardStore();
  const [searchQuery, setSearchQuery] = useState(""); // Search functionality remains local

  const filteredCategories = categories.map((category) => {
    const filteredWidgets = category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, widgets: filteredWidgets };
  });

  return (
    <div className="dashboard">
      <h1 className="text-2xl font-bold mb-4">CNAPP Dashboard</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {filteredCategories.map((category) => (
        <div key={category.name} className="category">
          <h2>{category.name}</h2>
          <div className="widgets">
            {category.widgets.map((widget) => (
              <div key={widget.id} className="widget">
                <h3>{widget.name}</h3>
                <p>{widget.content}</p>
                <button
                  onClick={() => removeWidget(category.name, widget.id)}
                  className="remove-widget-button"
                >
                  ❌
                </button>
                <p><strong>Widget ID:</strong> {widget.id}</p>
              </div>
            ))}
          </div>
          <button
            className="add-widget-button"
            onClick={() => {
              const widgetName = prompt("Enter Widget Name:");
              const widgetText = prompt("Enter Widget Text:");
              if (widgetName && widgetText) {
                addWidget(category.name, widgetName, widgetText);
              }
            }}
          >
            + Add Widget
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;