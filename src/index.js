import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyApp from './App';
import Profile from './pages/profile';
import Contact from './pages/contact';
import Home from './pages/home';
import Gallery from './components/gallery';
import MyGallery from './secb/my_gallery';
import HookExample from './components/hook_example';
import ApiCalling from './apiCalling/api_calling';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* root component for routing */}
    <ApiCalling/>
  </React.StrictMode>
);