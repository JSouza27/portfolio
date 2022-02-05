import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './style/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

import Root from './style/App_Style';
import Routes from './Routes';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <Root>
        <Routes />
        <Footer />
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={ 5000 }
          hideProgressBar={ false }
          newestOnTop={ false }
          closeOnClick
          rtl={ false }
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Root>
    );
  }
}

export default App;
