import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. import redux package
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import './index.css';
import App from './App';

let preloadedState = null;
if (process.env.NODE_ENV === 'development') {
  preloadedState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}
// 2. createStore 創建一個 Redux store 來存放 project 中所有的 state 狀態
const store = createStore(reducer, preloadedState);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './features/counterSlice';

// 透過 configureStore() 建立 Redux Store
// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   }
// });
