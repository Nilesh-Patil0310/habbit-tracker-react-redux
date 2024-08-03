import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import HabitDetails from './pages/habbitDetails';
import WeekView from './pages/weekView';

// Main App component that handles routing and navigation
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habit/:id" element={<HabitDetails />} />
        <Route path="/week-view" element={<WeekView />} />
      </Routes>
    </Router>
  );
}

export default App;
