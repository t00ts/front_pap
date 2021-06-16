import React from 'react';
import './App.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import { CreateFlat } from './components/CreateFlat';
import { Navbar } from './components/Navbar';
import { FlatProfile } from './components/FlatProfile';
import { HomeBanner } from './components/HomeBanner';
import { FlatIndexRent } from './components/FlatIndexRent';
import { FlatIndexBuy } from './components/FlatIndexBuy';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
        <Route path='/' exact component={HomeBanner} />
        <Route path='/flats/rent' component={FlatIndexRent} />
        <Route path='/flats/buy' component={FlatIndexBuy} />
        <Route path='/api/flats/:id' component={FlatProfile} />
        <Route path='/contact' component={Contact}/>
        <Route path='/about' />
        <Route path='/createFlat' component={CreateFlat} />
    </Router>
  );
};

export default App;
