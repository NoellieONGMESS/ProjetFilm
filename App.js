import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import DetailsFilm from './DetailsFilm';
import { Route, Link } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />

      <Route exact path="/" component={Home} />
      <Route exact path="/DetailsFilm" component={DetailsFilm} />
      <Footer />
    </div>
  );
}

export default App;
