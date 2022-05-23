import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AboutComponent } from '../components/about/AboutComponent';
import { HomeScreen } from '../components/home/HomeScreen';
import { ProjectScreen } from '../components/projects/ProjectScreen';
import { FooterComponent } from '../components/Ui/footer/FooterComponent';
import { NavbarScreen } from '../components/Ui/navbar/NavbarScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavbarScreen />
        <Switch>
          <Route path='/about' component={AboutComponent} />
          <Route path='/projects' component={ProjectScreen} />
          <Route path='/' component={HomeScreen} />
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
};
