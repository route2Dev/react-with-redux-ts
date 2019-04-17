import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>
          <FormattedMessage 
            id="app.title"
            defaultMessage="Welcome to Pluralsight Administration"
            description="Welcome header on home page"
          />
        </h1>
        <p>React, Redux and React Router for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    );
  }
}

export default HomePage;
