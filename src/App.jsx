import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Common/NavBar';
import CartPage from './pages/CartPage';
import ConfigurePage from './pages/ConfigurePage';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className='font-poppins bg-[#F6F8FA]'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/configure' element={<ConfigurePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
