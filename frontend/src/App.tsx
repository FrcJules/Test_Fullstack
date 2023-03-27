import React, { useState } from 'react';
import axios from 'axios';

const AddCarForm = () => {
  const [nomLoueur, setNomLoueur] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [marque, setMarque] = useState<string>('');
  const [modele, setModele] = useState<string>('');
  const [annee, setAnnee] = useState<number>(0);
  const [ville, setVille] = useState<string>('');
  const [prix, setPrix] = useState<number>(0);
  const [photo, setPhoto] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('nomLoueur', nomLoueur);
      formData.append('email', email);
      formData.append('marque', marque);
      formData.append('modele', modele);
      formData.append('annee', annee.toString());
      formData.append('ville', ville);
      formData.append('prix', prix.toString());
      if (photo !== null) {
        formData.append('photo', photo);
      }
      await axios.post('/api/cars', formData);
      window.location.href = '/cars';
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setPhoto(event.target.files[0]);
    }
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    if (validateEmail(email)) {
      setEmail(email);
      setErrorMessage('');
    } else {
      setErrorMessage('Email invalide');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom loueur:</label>
        <input type="text" value={nomLoueur} onChange={(e) => setNomLoueur(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        {errorMessage && <div>{errorMessage}</div>}
      </div>
      <div>
        <label>Marque:</label>
        <input type="text" value={marque} onChange={(e) => setMarque(e.target.value)} required />
      </div>
      <div>
        <label>Modèle:</label>
        <input type="text" value={modele} onChange={(e) => setModele(e.target.value)} required />
      </div>
      <div>
        <label>Année:</label>
        <input type="number" value={annee} onChange={(e) => setAnnee(parseInt(e.target.value))} required />
      </div>
      <div>
        <label>Ville:</label>
        <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} required />
      </div>
      <div>
        <label>Prix par jour:</label>
        <input type="number" value={prix} onChange={(e) => setPrix(parseInt(e.target.value))} required />
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" onChange={handleFileChange} required />
</div>
<button type="submit">Enregistrer</button>
</form>
);
};

export default AddCarForm;