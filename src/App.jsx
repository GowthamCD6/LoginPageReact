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
          <Route path="/LoginPageReact/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/LoginPageReact/home" element={isAuthenticated ? <Home onSignOut={handleSignOut} /> : <Navigate to="/LoginPageReact/signin" />} />
          <Route path="/LoginPageReact" element={<Navigate to="/LoginPageReact/signin" />} />
      </Routes>
  );
}

export default App
