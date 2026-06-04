import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Mainlayout";
import Dashboard from "./pages/Dashboard";
import TrafficMonitoring from "./pages/TrafficMonitoring";
import TrafficSignals from "./pages/TrafficSignals";
import IncidentReports from "./pages/IncidentReports";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/traffic-monitoring" element={<TrafficMonitoring />} />
          <Route path="/traffic-signals" element={<TrafficSignals />} />

          <Route path="/incident-reports" element={<IncidentReports />} />

          <Route path="/analytics" element={<Analytics />} />
        </Routes>

      </MainLayout>

    </BrowserRouter>
  )
}

export default App