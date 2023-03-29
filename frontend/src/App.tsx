import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/login';
import Form from './pages/form';
  
function App() {
return (
    <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
    </Routes>
    </Router>
);
}
  
export default App;