import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';

import NotFountPage from './views/StatusPages/NotFoundPage';
import AuthPage from './views/AuthPage/AuthPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <div className='container mx-auto px-4 h-full'>
      <Routes>
        <Route path='/sign-in' element={<AuthPage />} />
        <Route path='/sign-up' element={<AuthPage />} />

        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

