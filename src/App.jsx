import LoginPage from './pages/login/main.jsx'
import DashboardMain from './pages/dashboard/main.jsx'
import AppLayout from './layouts/AppLayout.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
