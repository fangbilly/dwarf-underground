import React, { Component } from 'react';

class OtherArticles extends Component {
    constructor() {
        super()
        
        this.state = {
            articles:[
                {
                    name:"orc",
                    picture:"https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
                    title:"Single Orcs in Indianapolis",
                },
                {
                    name:"mountain",
                    picture:"https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
                    title:"You won't believe what's under this mountain",
                },
                {
                    name:"gold",
                    picture:"http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
                    title:"Mine 20% more gold with One Weird Trick",
                },
                {
                    name:"hobbit",
                    picture:"http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
                    title:"Surprise for Indiana Hobbits born before 1999",
                },
            ],
        }
    }


            
    render() {
        return (   
            <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>         
                {this.state.articles.map(article =>
                    <div className="small-6 medium-3 columns other-article">
                        <a href="#">
                            <img src={article.picture} alt={article.name}/>
                        <p>{article.title}</p>
                        </a> 
                    </div>)
                }
            </div>
        );
    }
}
export default OtherArticles;