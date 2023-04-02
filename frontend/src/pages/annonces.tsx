import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Car } from '../utils/cars.entity';

function CarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [, setToken] = useState('');
  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/';
        return;
      }
      const storedToken = JSON.parse(localStorage.getItem('token') || '{}');
      if (!storedToken) {
        window.location.href = '/';
        return;
      }
      setToken(storedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      const response = await axios.get('http://localhost:4000/cars/all');
      const sortedCars = response.data.sort((a: Car, b: Car) => a.prix - b.prix);
      setCars(sortedCars);
      console.log(response.data);
    }
    
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liste des voitures</h1>
      {cars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars.map((car) => (
            <div key={car.id} className="border border-gray-300 rounded-lg p-4">
              <img className="mx-auto mb-4" src={car.photo} alt={`${car.marque} ${car.modele}`} />
              <div className="text-center">
                <h2 className="text-lg font-bold">{`${car.marque} ${car.modele}`}</h2>
                <p className="text-sm text-gray-600">{`Année: ${car.annee}`}</p>
                <p className="text-sm text-gray-600">{`Prix: ${car.prix}€/jour`}</p>
                <p className="text-sm text-gray-600">{`Ville: ${car.cityId}`}</p>
                <p className="text-sm text-gray-600">{`Nom du loueur: ${car.nomLoueur}`}</p>
                <p className="text-sm text-gray-600">{`Email: ${car.email}`}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucune voiture disponible pour le moment.</p>
      )}
    </div>
  );}

export default CarList;