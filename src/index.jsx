import React from 'react';
import { createRoot } from 'react-dom/client';

// Global Styles
import '@/css/app.css';

// App Components
import App from '@/components/App';

// Render
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
