import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Home from './pages/home/Index';
import Resume from './pages/resume/Index';
import Projects from './pages/projects/Index';
import Contact from './pages/contact/Index';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/Resume" element={ <Resume /> } />
      <Route path="/Projects" element={ <Projects /> } />
      <Route path="/Contact" element={ <Contact /> } />
    </Switch>
  );
}

export default Routes;
