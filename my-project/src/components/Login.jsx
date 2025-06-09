import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";

const Login = ({ setUser }) => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error al iniciar sesión", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-900 to-blue-400">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Perfumería Login</h1>
        <button 
          onClick={handleLogin} 
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition">
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
};

export default Login;
