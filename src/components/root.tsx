import React, { Component } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as locale_de from 'react-intl/locale-data/de';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import messages_de from '../translations/de.json'
import messages_en from '../translations/en.json';
import SelectInput from './common/SelectInput';

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

        const x = Object.keys(this.locales).map((key) => {
            return {value:  key,
                text: this.locales[key]};
        });

        console.log('Object.Keys mapping to variable', x);
    }

    onChange = (event: any) => {
        const { value } = event.target;
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
                <select onChange={this.onChange} value={this.state.locale}>
                    {Object.keys(this.locales).map((key) => {
                    return <option value={key} key={key}>{this.locales[key]}</option>
                    })}
                </select>
                <br />
                <div className="row">
                    <div className="col-md-12" style={{marginTop: '20px'}}>
                        <SelectInput 
                            name="localeId"
                            label="Locale"
                            value={this.state.locale}
                            options={Object.keys(this.locales).map((key) => {
                                return {value:  key,
                                    text: this.locales[key]};
                            })}
                            onChange={this.onChange}
                        />
                    </div>
                </div>
            </div>
         </>
    )};
}

export default Root;