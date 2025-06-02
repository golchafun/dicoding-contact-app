import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';

// styling
import './styles/style.css';
 
// const element = <h1>Hello, world!</h1>;
 
const root = createRoot(document.getElementById('root'));
// const element = <h1>Hello, world!</h1>;
root.render(<ContactApp />);