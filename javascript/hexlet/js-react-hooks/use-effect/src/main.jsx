import ReactDOM from 'react-dom/client';
import React from 'react';
import '../scss/main.scss';

import Products from './Products.jsx';

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(<Products />);
