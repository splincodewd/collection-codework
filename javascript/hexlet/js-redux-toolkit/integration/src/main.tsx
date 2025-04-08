import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import App from './components/App';
import store from './slices';

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>,
);
