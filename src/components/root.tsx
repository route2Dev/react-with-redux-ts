import React, { Component } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as locale_de from 'react-intl/locale-data/de';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import messages_de from '../translations/de.json'
import messages_en from '../translations/en.json';

addLocaleData([...locale_de]);

interface RootState {
    locale: string;
}

const messages: any = {
    'de': messages_de,
    'en': messages_en
};

class Root extends Component<{}, RootState> {
    private locales: any = {
        'en': 'English',
        'de': 'German'
      };

    constructor(props: any) {
        super(props);

        this.state = {
            locale: 'en'
        };
    }

    onChange = (event: any) => {
        const { name, value } = event.target;
        this.setState({locale: value});
    }

    render(): JSX.Element {
        return (
        <>
            <IntlProvider locale={this.state.locale} messages={messages[this.state.locale]}>
            <Router>
                <App />
            </Router> 
            </IntlProvider>
            <div>
                <p className="App-intro">
                    To change the language of the application, select one of the supported languaged in this dropdown
                </p>
                <select onChange={this.onChange}>
                    {Object.keys(this.locales).map((key) => {
                    return <option value={key} key={key}>{this.locales[key]}</option>
                    })}
                </select>
            </div>
         </>
    )};
}

export default Root;