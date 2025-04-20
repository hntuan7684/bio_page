import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './public/css/App.css';

import Home from './views/HomePage';
import About from './views/AboutPage';
import Contact from './views/ContactPage';
import Login from './views/LoginPage';
import Register from './views/RegisterPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}
