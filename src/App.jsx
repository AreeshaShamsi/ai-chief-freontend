import { useState } from 'react'
import LoginPage from './pages/login/main.jsx'
import DashboardMain from './pages/dashboard/main.jsx'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (
    <DashboardMain />
  ) : (
    <LoginPage onLogin={() => setLoggedIn(true)} />
  );
}

export default App
