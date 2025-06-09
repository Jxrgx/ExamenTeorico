import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ handleLogout }) => {
  return (
    <nav className="bg-blue-900 p-4 text-white flex justify-center gap-8 shadow-md">
      <Link to="/" className="hover:text-yellow-300">Inicio</Link>
      <Link to="/dama" className="hover:text-yellow-300">Perfumes Dama</Link>
      <Link to="/caballero" className="hover:text-yellow-300">Perfumes Caballero</Link>
      <Link to="/arabes" className="hover:text-yellow-300">Perfumes Arabes</Link>
      <button onClick={handleLogout} className="ml-10 text-red-400 hover:text-red-600">Cerrar sesión</button>
    </nav>
  );
};

export default NavBar;
