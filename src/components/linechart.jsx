import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const getColor = (key) => {
  const hash = [...key].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = hash % 360;
  return `hsl(${hue}, 70%, 50%)`;
};

const LineChartComponent = ({ dataObject }) => {
  const chartData = [{ name: "Total", ...dataObject }];
  const total = Object.values(dataObject).reduce((sum, val) => sum + Number(val), 0);
  const keys = Object.keys(dataObject);

  return (
    <div style={{ paddingTop: "1.98rem", width: "100%", height: "100%", textAlign: "center" }}>
      
      {/* Number and Label styling matched to existing widget */}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.25rem" }}>
        <strong style={{ fontSize: "1.1rem", fontWeight: 900}}>{total}</strong>
        <span style={{ fontSize: "0.9rem", color: "#666", fontWeight: 400 }}>
          Total Vulnerabilities
        </span>
      </div>

      <div style={{ width: "80%", height: 20, margin: "12px auto 0" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={chartData} barCategoryGap={0}>
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" hide />
            <Tooltip />
            {keys.map((key) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={getColor(key)}
                barSize={16}
                radius={[10, 10, 10, 10]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "12px" }}>
        {keys.map((key) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: getColor(key),
              }}
            />
            <span style={{ fontSize: "0.85rem", color: "#333" }}>
              {key} ({dataObject[key]})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineChartComponent;
