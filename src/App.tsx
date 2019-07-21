import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AboutPage from './components/about/about-page';
import Header from './components/common/header';
import CoursesPage from './components/courses/courses-page';
import ManageCoursePage from './components/courses/manage-course-page';
import HomePage from './components/home/home-page';
import PageNotFound from './components/page-not-found';

class App extends Component {
  componentDidMount() {
    console.log('Site variable: ', window.site);
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/course/:slug" component={ManageCoursePage} />
          <Route path="/course" component={ManageCoursePage} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar={true} />
      </div>
    );
  }
}

export default App;
