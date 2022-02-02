import React, { Component } from 'react';
import GlobalStyle from './style/GlobalStyle';

import { Root } from './style/App_Style';
import Routes from './Routes';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <Root>
        <Routes />
        <Footer />
        <GlobalStyle />
      </Root>
    );
  }
}

export default App;
