import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store';
import App from './App';

ReactDOM.render(
  <StoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById('root')
);
