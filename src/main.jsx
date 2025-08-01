import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import ProuductProvider from './pages/ProductContext.jsx';

createRoot(document.getElementById('root')).render(
  <ProuductProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ProuductProvider>
);
