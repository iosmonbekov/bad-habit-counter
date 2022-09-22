import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';

import HomePage from './views/HomePage';
import NotFountPage from './views/NotFoundPage';
import WelcomePage from './views/WelcomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename='/'>
    <div className='container mx-auto px-4 h-full'>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/home' element={<HomePage />} />

        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

