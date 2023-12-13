import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WishlistProvider from './context/wishlistContext';
import BasketProvider from './context/basketContext';
import SearchProvider from './context/searchContext';
import FilterProvider from './context/filterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterProvider>
    <SearchProvider>
    <BasketProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </BasketProvider>
    </SearchProvider>
    </FilterProvider>
  </React.StrictMode>
);

