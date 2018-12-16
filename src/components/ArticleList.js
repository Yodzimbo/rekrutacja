import React from 'react';

function ArticleList(props) {
    return (
        <div className='article-list-item'>
            <img height={100} 
                title={props.article.title}
                src={`/image/${props.article.image}`}
            />
            <div className={'text-wrapper'}>
                <h3>{props.article.title}</h3>
                <div>{props.article.description}</div>
            </div>
        </div>
    )
}

export default ArticleList;