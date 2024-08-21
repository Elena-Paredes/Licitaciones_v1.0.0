//App.jsx
// App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Principal from './pages/Principal';
import Especialidad from './pages/Especialidad';
import Licitacion from './pages/Licitacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Condicional para definir el basename solo en producción
const basename = process.env.NODE_ENV === 'production' ? '/Licitaciones_v1.0.0' : '';

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/especialidades" element={<Especialidad />} />
        <Route path="/licitaciones" element={<Licitacion />} />
      </Routes>
    </Router>
  );
}

export default App;
