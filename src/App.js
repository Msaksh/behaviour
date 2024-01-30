import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './Components/Home'
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;