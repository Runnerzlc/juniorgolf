import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import ContactUs from './pages/About/ContactUs';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/about_us" exact component={AboutUs} />
        <Route path="/contact_us" exact component={ContactUs} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
