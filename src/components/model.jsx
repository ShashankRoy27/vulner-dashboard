import React, { useState } from "react";

const Model = ({ onClose, onSave }) => {
  const [widgetName, setWidgetName] = useState("");
  const [chartType, setChartType] = useState("line");
  const [data, setData] = useState([{ key: "", value: "" }]);

  const handleAddDataField = () => {
    setData([...data, { key: "", value: "" }]);
  };

  const handleDataChange = (index, field, value) => {
    const updated = [...data];
    updated[index][field] = value;
    setData(updated);
  };

  const handleSave = () => {
    const formattedData = data.reduce((acc, item) => {
      if (item.key && item.value) acc[item.key] = Number(item.value);
      return acc;
    }, {});
    onSave(widgetName, chartType, formattedData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-heading">Add New Widget</h2>

        <div className="form-group">
          <label>Widget Name</label>
          <input
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            placeholder="Enter widget name"
          />
        </div>

        <div className="form-group">
          <label>Chart Type</label>
          <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
            <option value="line">Line Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
        </div>

        <div className="data-fields">
          <h4>Data</h4>
          {data.map((entry, index) => (
            <div key={index} className="data-row">
              <input
                type="text"
                placeholder="Key (e.g., CVEs)"
                value={entry.key}
                onChange={(e) => handleDataChange(index, "key", e.target.value)}
              />
              <input
                type="number"
                placeholder="Value (e.g., 1000)"
                value={entry.value}
                onChange={(e) => handleDataChange(index, "value", e.target.value)}
              />
            </div>
          ))}
          <button onClick={handleAddDataField} className="add-data-button">
            + Add Data
          </button>
        </div>

        <div className="modal-actions">
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={onClose} className="cancel-button">Cancel</button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          width: 400px;
        }

        .modal-heading {
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        input, select {
          padding: 0.5rem;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .data-fields {
          margin-top: 1.5rem;
        }

        .data-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .add-data-button, .save-button, .cancel-button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .add-data-button {
          background-color: #eee;
        }

        .save-button {
          background-color: #007bff;
          color: white;
        }

        .cancel-button {
          background-color: #ccc;
          margin-left: 0.5rem;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Model;
