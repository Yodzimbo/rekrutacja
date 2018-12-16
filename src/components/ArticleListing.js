import React from 'react';
import ArticleList from './ArticleList';

function ArticleListing(props) {
    return (
        <div className={'container article-listing'}>
            {
                props.articles.map( (article, index) =>
                    <ArticleList 
                    key={index}
                    article = {article} 
                    />)
            }   
        </div>
    )
} 

export default ArticleListing;
