import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './app/config/store';
import routes from './app/config/routes';
import { Alert } from './app/components';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    <Alert />
  </Provider>,
  document.getElementById('root')
);
