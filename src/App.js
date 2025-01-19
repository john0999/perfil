import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/StylePerfil.css';
import Profile from './components/perfil';
import Servicios from './Pages/services';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
};

export default App;
