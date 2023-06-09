import React, { useState, useEffect } from 'react';
import * as validator from 'email-validator';
import axios from 'axios';

interface City {
  nom: string;
}

const AddCarForm = () => {
  const [nomLoueur, setnomLoueur] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [marque, setMarque] = useState<string>("");
  const [modele, setModele] = useState<string>("");
  const [annee, setAnnee] = useState<number>(2000);
  const [cityId, setCityId] = useState<string>("");
  const [prix, setPrix] = useState<number>(0);
  const [photo, setPhoto] = useState<string | null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorYear, setErrorYear] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [, setToken] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/';
        return;
      }
      const response = await axios.get<City[]>(
        "https://geo.api.gouv.fr/departements/987/communes?fields=nom&format=json"
      );
      setCities(response.data);
    };
    fetchCities();
  }, []);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (validator.validate(newEmail)) {
      setErrorEmail("");
    } else {
      setFormSubmitted(false);
      setErrorEmail("L'email n'est pas valide");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (validator.validate(email)) {
      setErrorEmail("");
    } else {
      setFormSubmitted(false);
      setErrorEmail("L'email n'est pas valide");
    }
    event.preventDefault();
    try {
      const formData: any = {
        nomLoueur: nomLoueur,
        email: email,
        marque: marque,
        modele: modele,
        annee: annee.toString(),
        cityId: cityId.toString(),
        prix: prix.toString(),
        photo: photo,
      };
      const storedToken = JSON.parse(localStorage.getItem('token') || '{}');
      if (!storedToken) {
        window.location.href = '/';
        return;
      }
      setToken(storedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      await axios.post("http://localhost:4000/cars/create", formData);
      setFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setPhoto(event.target.files[0].name);
    }
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const annee = Number(event.target.value);
    if (annee >= 1900 && annee <= 2023) {
      setAnnee(annee);
      setErrorYear("");
    } else {
      setErrorYear("L'année doit être comprise entre 1900 et 2023");
    }
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = Number(event.target.value);
    if (price > 0) {
      setPrix(price);
      setErrorPrice("");
    } else {
      setErrorPrice("Le prix ne peut pas être inférieur à 0");
    }
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCityId(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      {formSubmitted && (
        <div className="text-blue-500 mb-4">
          Le formulaire à bien été envoyé.
        </div>
      )}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="nomLoueur"
        >
          Nom loueur:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={nomLoueur}
          onChange={(e) => setnomLoueur(e.target.value)}
          id="nomLoueur"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errorEmail && "border-red-500"
          }`}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {errorEmail && <div className="text-red-500 text-sm">{errorEmail}</div>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="marque">
          Marque:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
          id="marque"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="modele">
          Modèle:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={modele}
          onChange={(e) => setModele(e.target.value)}
          id="modele"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="annee">
          Année:
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errorYear && "border-red-500"
          }`}
          type="number"
          value={annee}
          onChange={handleYearChange}
          id="annee"
          required
        />
        {errorYear && <div className="text-red-500 text-sm">{errorYear}</div>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="ville">
          Ville :
          <select value={cityId} onChange={handleCityChange}>
            {cities.map((city) => (
              <option key={city.nom} value={city.nom}>
                {city.nom}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="prix">
          Prix par jour:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">€</span>
          </div>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-7 ${
              errorPrice && "border-red-500"
            }`}
            type="number"
            value={prix}
            onChange={handlePriceChange}
            id="prix"
            step="1.00"
            required
          />
        </div>
        {errorPrice && <div className="text-red-500 text-sm">{errorPrice}</div>}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="photoUrl"
        >
          Photo:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          id="photoUrl"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
}

export default AddCarForm;