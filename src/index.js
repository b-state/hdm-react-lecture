import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStoreHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import categoryReducer from './Reducers/category';

// Create global Redux Store 
const myStore = configureStore({reducer: {categoryReducer}});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
