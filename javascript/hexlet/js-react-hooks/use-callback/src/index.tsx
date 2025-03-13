import ReactDOM from 'react-dom/client';
import React from 'react';
import i18next from 'i18next';
import '../scss/main.scss';
import { initReactI18next } from 'react-i18next';

import App from './App';
import resources from './locales/index';

const i18n = i18next.createInstance();
const options = {
    resources,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
};

i18n
    .use(initReactI18next)
    .init(options);

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(<App />);
