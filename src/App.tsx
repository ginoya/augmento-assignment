import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Assignment from './components/Assignment/Assignment';

function App() {
  return (
    <Provider store={store}>
      <Assignment></Assignment>
    </Provider>
  );
}

export default App;
