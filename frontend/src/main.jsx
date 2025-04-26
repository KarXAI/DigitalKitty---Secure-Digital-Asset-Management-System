import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import SimpleApp from './SimpleApp';
// Import CSS in the correct order - Tailwind should be first
import './styles/tailwind.css';
import './index.css';
import './styles/animations.css';

// Render the App component inside the div with id="root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
