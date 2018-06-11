import React, { Component } from 'react';
import MainArticle from './MainArticle';
import SideArticle from './SideArticle';
import OtherArticles from './OtherArticles';

class MainBody extends Component {
    render() {
      return (
        <main className="expanded row">
        <MainArticle/>

        <SideArticle/>

        <OtherArticles/>

      </main>
      );
    }
}
export default MainBody;