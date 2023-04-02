import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import JWT from 'jwt-decode';

export default function Login() {
  const [username, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/auth/login', {
        username,
        password,
      });
      localStorage.setItem("token", JSON.stringify(response.data.access_token));
      setUser(JWT(response.data.access_token));
      console.log(response.data);
      console.log('Login successful');
      if (username === 'user1') {
        navigate('/form');
      } else if (username === 'user2') {
        navigate('/annonces');
      } else if (username === 'user3') {
        navigate('/admin');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Mot de passe ou nom d\'utilisateur incorrect');
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>User</label>
            <input
              type="username"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={username}
              onChange={handleUserChange}
            />
          </div>
          <div className="mb-2">
            <label>Password</label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Login
            </button>
          </div>
          {errorMessage && (
            <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
