import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
// Remove the duplicate import statement
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/admin' element={<Admin></Admin>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
