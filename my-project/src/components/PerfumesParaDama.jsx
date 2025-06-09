import React from 'react';
import PerfumeCard from './PerfumeCard';

const PerfumesParaDama = () => {
  const perfumes = [
    {
      nombre: "Rosa Encantada",
      descripcion: "Fragancia floral con toques frutales y matices dulces.",
      ingredientes: "Rosa, jazmín, vainilla, pera.",
      imagen: ""
    },
    {
      nombre: "Brisa Marina",
      descripcion: "Aroma fresco y acuático ideal para el día a día.",
      ingredientes: "Notas marinas, lima, almizcle.",
      imagen: ""
    },
    {
      nombre: "Noche de Encanto",
      descripcion: "Fragancia sensual y profunda perfecta para la noche.",
      ingredientes: "Ámbar, patchouli, vainilla, orquídea negra.",
      imagen: ""
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Perfumes para Dama</h1>
      {perfumes.map((perfume, index) => (
        <PerfumeCard key={index} {...perfume} />
      ))}
    </div>
  );
};

export default PerfumesParaDama;
