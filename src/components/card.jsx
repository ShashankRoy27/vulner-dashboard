import React from "react";
import Chart from "./chart";
import RiskBarChart from "./riskchart";
import LineChartComponent from "./linechart"; // Now used for the horizontal stacked bar

const Card = ({ widget, onRemove, isEmpty, onAdd }) => {
  if (isEmpty) {
    return (
      <div className="widget empty-card" onClick={onAdd}>
        <button className="add-widget-inner">＋ Add Widget</button>
      </div>
    );
  }

  if (!widget) return null;

  const hasValidData =
    typeof widget.content === "object" &&
    widget.content &&
    Object.keys(widget.content).length > 0;

  const renderChart = () => {
    if (widget.category === "Registry Scan") {
      return <RiskBarChart dataObject={widget.content} />;
    }

    switch (widget.type) {
      case "line":
        return <LineChartComponent dataObject={widget.content} />;
      case "pie":
      default:
        return <Chart dataObject={widget.content} />;
    }
  };

  return (
    <div className="widget filled-card">
      <button onClick={onRemove} className="remove-widget-button">
        ❌
      </button>

      <h3 className="widget-title">{widget.name}</h3>

      {hasValidData ? (
        renderChart()
      ) : (
        <div className="no-data">
          <img
            src="src/images/graph.png"
            alt="No data"
            className="no-data-image"
          />
          <p>No graph data available</p>
        </div>
      )}

      <style>{`
        .widget {
          width: 350px;
          height: 250px;
          box-sizing: border-box;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #fff;
          border-radius: 10px;
          border: 1px solid #ddd;
          padding: 1rem;
          text-align: center;
        }

        .widget-title {
          font-size: 16px;
          font-weight: 600;
          margin: 0 auto;
          padding-top: 0.5rem;
          max-width: 90%;
          line-height: 1.2;
        }

        .remove-widget-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #fff !important;
          border: none !important;
          color: #888 !important;
          font-size: 16px;
          cursor: pointer;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .remove-widget-button:hover {
          background: #f0f0f0 !important;
          color: #555 !important;
        }

        .chart-wrapper {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 0.5rem;
        }

        .empty-card {
          background-color: #f9f9f9;
          border: 2px dashed #ccc;
          border-radius: 10px;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .empty-card:hover {
          background-color: #f1f1f1;
        }

        .add-widget-inner {
          background: none;
          border: none;
          color: #555;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          padding: 10px 15px;
        }
      `}</style>
    </div>
  );
};

export default Card;
