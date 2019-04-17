import '@babel/polyfill'
// tslint:disable-next-line: ordered-imports
// import 'raf/polyfill';
// tslint:disable-next-line: ordered-imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'core-js/es6/string';
import 'core-js/fn/array/includes';
import React from 'react';
import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as locale_de from 'react-intl/locale-data/de';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Root from './components/root';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configure-store';
import messages_de from './translations/de.json'
import messages_en from './translations/en.json';

addLocaleData([...locale_de]);

const store = configureStore();

const messages: any = {
  'de': messages_de,
  'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code
// const language = 'de';

ReactDOM.render(
  <ReduxProvider store={store}>
    <Root />
  </ReduxProvider>,
  document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
