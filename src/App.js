import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skicams from './components/Skicams';
import Footer from './components/Footer';
import Contact from './components/ContactForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/skicams' component={Skicams} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
