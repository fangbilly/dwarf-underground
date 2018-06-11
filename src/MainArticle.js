import React, { Component } from 'react';
import ArticleContext from './ArticleContext';
import Author from './Author';
import ArticleLinks from './ArticleLinks';

class MainArticle extends Component {
    render() {
      return (
        <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Author/>
            <ArticleContext/>
            <ArticleLinks/>
        </div>
      );
    }
}

export default MainArticle