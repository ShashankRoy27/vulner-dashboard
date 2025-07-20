# 🔐 Vulner Tracker Dashboard

A clean and responsive web dashboard for tracking and visualizing security vulnerabilities. Users can dynamically create chart widgets to display data across categories like CVEs, Malware, and Misconfigurations.

---

## 📊 Features

- 📌 Add dynamic widgets with custom data
- 📈 Chart options: Pie Chart and Horizontal Stacked Bar Chart
- 🖥️ Responsive and modern UI using React
- ⚡ Lightning-fast development environment with Vite
- 🎨 Automatically assigned colors for chart segments

---

## 🛠️ Tech Stack

- **Frontend**: React
- **Charting**: Recharts
- **Bundler**: Vite
- **Language**: JavaScript (ES6+)

---

## 🗂️ Project Structure

```
vulner-tracker/
├── cnapp-dashboard/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LineChartComponent.jsx
│   │   │   ├── PieChartComponent.jsx
│   │   │   ├── Widget.jsx
│   │   │   └── Model.jsx
│   │   ├── Dashboard.jsx
│   │   └── App.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
```

---

## 🚀 Getting Started (Local Setup)

### ✅ Prerequisites

- Node.js (v16 or newer)
- npm (comes with Node)

---

### 📦 Installation

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/vulner-tracker.git
```

2. **Navigate to the project folder**:

```bash
cd vulner-tracker/dashboard-app011/cnapp-dashboard
```

3. **Install dependencies**:

```bash
npm install
```

4. **Run the app locally**:

```bash
npm run dev
```

Open your browser at **http://localhost:5173**

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🔍 Preview Production Build

```bash
npm run preview
```

---

## 🌍 Deployment (Render.com)

To deploy on [Render](https://render.com):

1. Push code to a GitHub repository.
2. Create a new Web Service in Render and connect your repo.
3. Set:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run preview`
4. Add this to `vite.config.js`:

```js
export default {
  preview: {
    host: true,
    allowedHosts: ['your-app-name.onrender.com']
  }
};
```

---

## 📄 License

MIT License. Feel free to use and modify this project.

---

Let me know if you want a downloadable `README.md` file or to auto-generate a GitHub description!
