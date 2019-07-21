/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as locale_de from 'react-intl/locale-data/de';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import messages_de from '../translations/de.json';
import messages_en from '../translations/en.json';
import Ranger from './common/ranger';
import SelectInput from './common/SelectInput';
import Popover from './common/popover';

addLocaleData([...locale_de]);

interface RootState {
  locale: string;
}

const messages: any = {
  de: messages_de,
  en: messages_en
};

const locales: any = {
  en: 'English',
  de: 'German'
};

const Root = () => {
  const [localeState, setLocaleState] = useState('en');

  useEffect(() => {
    window.createPopover();
  }, []);

  const onChange = (event: any) => {
    const { value } = event.target;
    setLocaleState(value);
  };

  return (
    <>
      <IntlProvider locale={localeState} messages={messages[localeState]}>
        <Router>
          <App />
        </Router>
      </IntlProvider>
      <div>
        <p className="App-intro">
          To change the language of the application, select one of the supported
          languaged in this dropdown
        </p>
        <select onChange={onChange} value={localeState}>
          {Object.keys(locales).map(key => {
            return (
              <option value={key} key={key}>
                {locales[key]}
              </option>
            );
          })}
        </select>
        <br />
        <div className="row">
          <div className="col-md-12" style={{ marginTop: '20px' }}>
            <SelectInput
              name="localeId"
              label="Locale"
              value={localeState}
              options={Object.keys(locales).map(key => {
                return {
                  value: key,
                  text: locales[key]
                };
              })}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-secondary">Copy to All</button>
            <Popover content="My Popover content" />
          </div>
        </div>
        <div style={{ width: 400, margin: 50 }}>
          <Ranger />
        </div>
      </div>
    </>
  );
};

export default Root;
