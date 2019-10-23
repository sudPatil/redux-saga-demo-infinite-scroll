import "regenerator-runtime/runtime";
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './src/app';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
)
