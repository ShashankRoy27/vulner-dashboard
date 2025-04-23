// src/data/dashboardData.jsx
const dashboardData = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: 1,
          name: "Cloud Accounts",
          category: "CSPM Executive Dashboard",
          content: {
            Connected: 2,
            "Not Connected": 2,
          },
        },
        {
          id: 2,
          name: "Cloud Account Risk Assessment",
          category: "CSPM Executive Dashboard",
          content: {
            High: 3,
            Medium: 5,
            Low: 4,
          },
        },
      ],
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        {
          id: 3,
          name: "Top 5 Namespace Specific Alerts",
          category: "CWPP Dashboard",
          content: {
            "Namespace A": 10,
            "Namespace B": 6,
            "Namespace C": 3,
            "Namespace D": 7,
            "Namespace E": 4,
          },
        },
        {
          id: 4,
          name: "Workload Alerts",
          category: "CWPP Dashboard",
          content: {
            Critical: 3,
            Warning: 6,
            Info: 2,
          },
        },
      ],
    },
    {
      name: "Registry Scan",
      widgets: [
        {
          id: 5,
          name: "Image Risk Assessment",
          category: "Registry Scan",
          content: {
            Vulnerable: 5,
            Safe: 10,
          },
        },
        {
          id: 6,
          name: "Image Security Issues",
          category: "Registry Scan",
          content: {
            CVEs: 4,
            Malware: 1,
            Misconfigurations: 3,
          },
        },
      ],
    },
  ],
};

export default dashboardData;
