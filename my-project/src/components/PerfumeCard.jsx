import React from 'react';

const PerfumeCard = ({ nombre, descripcion, ingredientes, imagen }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 hover:scale-105 transition-transform duration-300">
    <img src={imagen} alt={nombre} className="w-40 h-40 object-cover rounded mb-4" />
      <h2 className="text-xl font-bold mb-2">{nombre}</h2>
      <p className="mb-2 text-gray-600">{descripcion}</p>
      <p className="text-sm text-gray-500">Ingredientes: {ingredientes}</p>
    </div>
  );
};

export default PerfumeCard;
