import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import Dashboard from "./pages/Dashboard"
import Traffic from "./pages/Traffic"
import Emergency from "./pages/Emergency"
import Analytics from "./pages/Analytics"

function App() {
  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/traffic" element={<Traffic />} />

          <Route path="/emergency" element={<Emergency />} />

          <Route path="/analytics" element={<Analytics />} />
        </Routes>

      </MainLayout>

    </BrowserRouter>
  )
}

export default App