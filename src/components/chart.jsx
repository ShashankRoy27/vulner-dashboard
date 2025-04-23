import React, { useMemo } from "react";
import { PieChart, Pie, Cell } from "recharts";

// Function to generate random color set for each chart
const generateColors = (count) => {
  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  return Array.from({ length: count }, () => randomColor());
};

const Chart = ({ dataObject }) => {
  const data = Object.entries(dataObject).map(([key, value]) => ({
    name: key,
    value: Number(value),
  }));

  const total = data.reduce((acc, d) => acc + d.value, 0);

  // Generate new color set for each chart render
  const COLORS = useMemo(() => generateColors(data.length), [data.length]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        {/* Center Text (Total Value + Label) */}
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#000"
        >
          {total}
        </text>
        <text
          x="50%"
          y="57%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fill="#888"
        >
          Total
        </text>
      </PieChart>

      {/* Legend on the Right */}
      <div style={{ marginLeft: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {data.map((entry, index) => (
          <div
            key={`legend-${index}`}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: COLORS[index % COLORS.length],
              }}
            ></div>
            <span style={{ fontSize: "14px", color: "#333" }}>
              {entry.name} ({entry.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
