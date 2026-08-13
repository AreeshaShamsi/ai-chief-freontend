import LoginPage from './pages/login/main.jsx'
import DashboardMain from './pages/dashboard/main.jsx'
import AppLayout from './layouts/AppLayout.jsx'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<Navigate to="/dashboard" replace />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardMain />} />
          <Route path="/campaigns" element={<DashboardMain />} />
          <Route path="/deals" element={<DashboardMain />} />
          <Route path="/call-log" element={<DashboardMain />} />
          <Route path="/knowledge-base" element={<DashboardMain />} />
          <Route path="/tasks" element={<DashboardMain />} />
          <Route path="/contact" element={<DashboardMain />} />
          <Route path="/integration" element={<DashboardMain />} />
          <Route path="/settings" element={<DashboardMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
