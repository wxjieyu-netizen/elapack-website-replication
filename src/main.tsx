import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Restore a deep link after GitHub Pages 404 fallback.
const redirect = sessionStorage.getItem('spaRedirect');
if (redirect) {
  sessionStorage.removeItem('spaRedirect');
  window.history.replaceState({}, '', redirect);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
