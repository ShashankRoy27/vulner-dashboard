// src/components/RiskBarChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#B31312", "#D83F31", "#FFA41B", "#FCDC2A", "#B4B4B4"];

const RiskBarChart = ({ dataObject }) => {
  const data = [
    {
      name: "Vulnerabilities",
      ...dataObject,
    },
  ];

  const keys = Object.keys(dataObject);
  const total = Object.values(dataObject).reduce((sum, val) => sum + val, 0);

  return (
    <div style={{ width: "100%", height: "150px", fontSize: "12px" }}>
      <h4 style={{ margin: "0 0 6px 0" }}>
        <span style={{ fontSize: "20px", fontWeight: "600" }}>{total}</span>{" "}
        <span style={{ color: "#555", fontSize: "13px" }}>Total Vulnerabilities</span>
      </h4>

      <ResponsiveContainer width="100%" height={30}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
          barCategoryGap={0}
        >
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" hide />
          {keys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={COLORS[index % COLORS.length]}
              barSize={10}
              radius={[20, 20, 20, 20]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>

      {/* Labels below the bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          marginTop: "10px",
          gap: "10px",
        }}
      >
        {keys.map((key, index) => (
          <div
            key={key}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "#333",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: COLORS[index % COLORS.length],
                borderRadius: "50%",
              }}
            ></div>
            <span>
              {key} ({dataObject[key]})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskBarChart;
