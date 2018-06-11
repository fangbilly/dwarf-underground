import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainArticle from './MainArticle';
import SideArticle from './SideArticle';
import Footer from './Footer';
import OtherArticles from './OtherArticles';



class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Header/>

        <main className="expanded row">
          <MainArticle/>

          <SideArticle/>

          <OtherArticles/>

        </main>

        <Footer/>
      
      </div>
    );
  }
}

export default App;
