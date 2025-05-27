import React from 'react';

type Review = {
  id: number;
  name: string;
  photoUrl: string;
  rating: number;
  message: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: 'João Silva',
    photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 9,
    message: 'Com certeza farei aqui meus eventos famíliares.',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 8,
    message: 'Muito satisfeita com a pizza. Chegou antes do horário e bem quentinha.',
  },
  {
    id: 3,
    name: 'Carlos Souza',
    photoUrl: 'https://randomuser.me/api/portraits/men/55.jpg',
    rating: 10,
    message: 'Excelente atendimento e um sabor impecável!.',
  },
];
export default function ClientReviews(){
    return(
         <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-50 mt-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white shadow-lg rounded-lg p-6 w-72 text-center hover:scale-105 transition-transform duration-200"
        >
          <img
            src={review.photoUrl}
            alt={`Foto de ${review.name}`}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Nota:</strong> {review.rating}/10
          </p>
          <p className="text-sm italic text-gray-500">"{review.message}"</p>
        </div>
      ))}
    </div>
    )
};
