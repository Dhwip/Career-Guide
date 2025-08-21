import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CareerAssessment from './components/CareerAssessment';
import CareerResults from './components/CareerResults';
import CareerExplorer from './components/CareerExplorer';
import Resources from './components/Resources';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<CareerAssessment />} />
            <Route path="/results" element={<CareerResults />} />
            <Route path="/explorer" element={<CareerExplorer />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;
