import { useState } from 'react'
import LoginPage from './pages/login/main.jsx'
import DashboardMain from './pages/dashboard/main.jsx'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
