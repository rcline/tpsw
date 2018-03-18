import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { RMWCProvider } from 'rmwc/Provider';

import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import 'material-components-web/dist/material-components-web.min.css';
import './index.css';

ReactDOM.render(
  <ReduxProvider store={store}>
    <RMWCProvider>
      <App />
    </RMWCProvider>
  </ReduxProvider>,
  document.getElementById('root')
);
registerServiceWorker();
