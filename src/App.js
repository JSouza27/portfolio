import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';

import Home from './pages/home/Index';
import Resume from './pages/resume/Index';
import Projects from './pages/projects/Index';
import Contact from './pages/contact/Index';
import { Root } from './style/App_Style';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <Root>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/Resume" element={ <Resume /> } />
          <Route path="/Projects" element={ <Projects /> } />
          <Route path="/Contact" element={ <Contact /> } />
        </Routes>
        <Footer />
        <GlobalStyle />
      </Root>
    );
  }
}

export default App;
