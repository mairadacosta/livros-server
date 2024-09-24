import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Register from '../src/pages/cadastro'
import Login from '../src/pages/login'
import Livros from './componentes/livros';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const PrivateRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/ >} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/cadastro" element={<Register />} />
        <Route
          path="/livros"
          element={
            <PrivateRoute>
              <Livros setToken={setToken} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
