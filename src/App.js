import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Dashboard />
  );
}

export default App;
