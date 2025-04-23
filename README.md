Vulner Tracker Dashboard
A lightweight and customizable web-based dashboard for tracking and visualizing security vulnerabilities. The app provides flexible chart widgets (Pie and Line/Stacked Bar) to help security teams monitor different categories of vulnerabilities such as CVEs, Malware, and Misconfigurations.

Features
Add, edit, and view widgets displaying vulnerability data

Two visualization types: Pie Chart and Horizontal Stacked Bar Chart

Responsive layout and clean UI

Built with React and Recharts

Lightweight development using Vite

Tech Stack
Frontend: React, Recharts, Vite

Styling: Inline CSS and modular component-based design

Project Structure
php
Copy
Edit
cnapp-dashboard/
├── public/
├── src/
│   ├── components/        # React components including widgets and charts
│   ├── Dashboard.jsx      # Main dashboard layout
│   └── App.jsx            # Entry point component
├── package.json
├── vite.config.js         # Vite configuration
└── index.html
Getting Started
Prerequisites
Node.js (v16 or above recommended)

npm (comes with Node.js)

Installation
Clone the repository or download the project files:

bash
Copy
Edit
git clone https://github.com/your-username/vulner-tracker.git
cd vulner-tracker/dashboard-app011/cnapp-dashboard
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Open your browser at http://localhost:5173

Building for Production
bash
Copy
Edit
npm run build
Previewing Production Build
bash
Copy
Edit
npm run preview
Deployment
This project can be deployed on platforms like Render, Vercel, or Netlify. When using Render, make sure to:

Set the build command to:

arduino
Copy
Edit
npm run build
Set the start command to:

arduino
Copy
Edit
npm run preview
Ensure vite.config.js contains:

js
Copy
Edit
preview: {
  host: true,
  allowedHosts: ['your-app-name.onrender.com']
}
License
This project is open source and available under the MIT License.
