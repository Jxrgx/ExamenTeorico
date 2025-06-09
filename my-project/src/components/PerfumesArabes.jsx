import React from 'react';
import PerfumeCard from './PerfumeCard';

const PerfumesArabes = () => {
  const perfumes = [
    {
      nombre: "Oud Imperial",
      descripcion: "Fragancia intensa de oud con notas orientales profundas.",
      ingredientes: "Oud, rosa de damasco, azafrán, ámbar.",
      imagen: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-5bc0-61f8-a2e4-0c94af7c5c91/raw?se=2025-06-09T18%3A12%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=bee4fd7e-059b-5f19-88c2-1f36ee049725&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-08T23%3A14%3A59Z&ske=2025-06-09T23%3A14%3A59Z&sks=b&skv=2024-08-04&sig=zhaZJsWZJCRuddBEbr7peUhlxH3lcq7hlFD%2BPUi6z3M%3D"
    },
    {
      nombre: "Desierto Dorado",
      descripcion: "Aroma cálido y especiado, inspirado en las dunas árabes.",
      ingredientes: "Canela, cardamomo, cuero, incienso.",
      imagen: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-2928-61f7-8afb-6f91be60bd69/raw?se=2025-06-09T18%3A12%3A40Z&sp=r&sv=2024-08-04&sr=b&scid=2a47dfee-b306-598d-a370-a23f9960a656&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-09T00%3A31%3A25Z&ske=2025-06-10T00%3A31%3A25Z&sks=b&skv=2024-08-04&sig=iOzmguo1v%2BNJSHOt2DnXTuD/aATuBOKZDNeMArHR7hI%3D"
    },
    {
      nombre: "Misterio Oriental",
      descripcion: "Combinación exótica de notas dulces y maderosas.",
      ingredientes: "Miel, sándalo, mirra, almizcle blanco.",
      imagen: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-a384-61f7-a22e-00e969372c60/raw?se=2025-06-09T18%3A12%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=5a62f585-8074-5dfb-a4b8-c68d5cc0a4ef&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-09T12%3A53%3A21Z&ske=2025-06-10T12%3A53%3A21Z&sks=b&skv=2024-08-04&sig=yJuGMPa6XXrJiwnN3S6EONEQZSv/AHhLNP8%2BG7wCh8E%3D"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Perfumes Arabes</h1>
      {perfumes.map((perfume, index) => (
        <PerfumeCard key={index} {...perfume} />
      ))}
    </div>
  );
};

export default PerfumesArabes;
