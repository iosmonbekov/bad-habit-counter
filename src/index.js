import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';

import HomePage from './views/HomePage';
import NotFountPage from './views/NotFoundPage';
import WelcomePage from './views/WelcomePage';
import SignInPage from './views/SignInPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <div className='container mx-auto px-4 h-full'>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<SignInPage />} />

        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

