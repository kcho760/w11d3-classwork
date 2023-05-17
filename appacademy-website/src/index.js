import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function Root() {
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Root />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
