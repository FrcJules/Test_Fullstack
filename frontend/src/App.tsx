import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/login';
import Form from './pages/form';
import Ads from './pages/annonces';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/annonces' element={<Ads />} />
      </Routes>
    </Router>
  );
}

export default App;
