import React from 'react';
import PerfumeCard from './PerfumeCard';

const PerfumesParaCaballero = () => {
  const perfumes = [
    {
      nombre: "Madera Salvaje",
      descripcion: "Fragancia amaderada con un toque especiado.",
      ingredientes: "Cedro, sándalo, pimienta negra, bergamota.",
      imagen: ""
    },
    {
      nombre: "Oceano Profundo",
      descripcion: "Aroma fresco e intenso, ideal para el verano.",
      ingredientes: "Notas marinas, limón, almizcle.",
      imagen: ""
    },
    {
      nombre: "Noche Misteriosa",
      descripcion: "Fragancia intensa y duradera perfecta para eventos nocturnos.",
      ingredientes: "Cuero, ámbar gris, vainilla, tabaco.",
      imagen: ""
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Perfumes para Caballero</h1>
      {perfumes.map((perfume, index) => (
        <PerfumeCard key={index} {...perfume} />
      ))}
    </div>
  );
};

export default PerfumesParaCaballero;
