import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Header/>

        <MainBody/>

        <Footer/>
      
      </div>
    );
  }
}

export default App;
