import 'core-js/stable';
import 'regenerator-runtime/runtime';
// tslint:disable-next-line: ordered-imports
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'react-app-polyfill/ie11';
import { addLocaleData } from 'react-intl';
import * as locale_de from 'react-intl/locale-data/de';
import { Provider as ReduxProvider } from 'react-redux';
import { render } from 'react-snapshot';
import Root from './components/root';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configure-store';

addLocaleData([...locale_de]);

const store = configureStore();

// const language = 'de';

render(
  <ReduxProvider store={store}>
    <Root />
  </ReduxProvider>,
  document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
