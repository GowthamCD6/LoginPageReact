import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  const [count, setCount] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
      setIsAuthenticated(false);
  };

  return (

      <Routes>
          <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/home" element={isAuthenticated ? <Home onSignOut={handleSignOut} /> : <Navigate to="/signin" />} />
          <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
  );
}

export default App
