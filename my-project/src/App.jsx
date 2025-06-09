import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PerfumesParaDama from './components/PerfumesParaDama';
import PerfumesParaCaballero from './components/PerfumesParaCaballero';
import PerfumesArabes from './components/PerfumesArabes';
import Login from './components/Login';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <Router>
      <NavBar handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<h1 className="text-center text-3xl mt-10 font-bold">Bienvenido a la Perfumería</h1>} />
        <Route path="/dama" element={<PerfumesParaDama />} />
        <Route path="/caballero" element={<PerfumesParaCaballero />} />
        <Route path="/arabes" element={<PerfumesArabes />} />
      </Routes>
    </Router>
  );
}

export default App;
