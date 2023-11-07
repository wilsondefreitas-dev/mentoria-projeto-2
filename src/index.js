import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import ProductsList from './_components/ProductsList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProductsList/>
  </React.StrictMode>
);
