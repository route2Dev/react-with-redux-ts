import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './components/about/about-page';
import { Header } from './components/common/header';
import CoursesPage from './components/courses/courses-page';
import HomePage from './components/home/home-page';
import PageNotFound from './components/page-not-found';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
