import React from 'react';
import ArticleListing from './ArticleListing';
import data from '../data/articles.json';

export default function About(props) {
    return <ArticleListing articles = {data.articles} />
}