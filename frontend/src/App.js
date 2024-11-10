import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home} />
        <Route path='/admin' element={Admin}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
