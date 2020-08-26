import React, {useState} from 'react'
import {connect} from 'react-redux';

import {getNews} from '../../redux/actions/news'
import './style.css'
import HeaderOfScreens from "../../components/HeaderOfScreens";

function News ({news, getNews}) {

    const allNews = news.articles

    useState(() => {
        getNews()
    }, [])

    return (
        <>
            <HeaderOfScreens title={'News'}/>
            <div>
                {allNews && allNews.map(({title, author, description, urlToImage}) => (
                    <div key={title} className='newsContainer'>
                        <img src={urlToImage} alt='news' className='imageNews'/>
                        <div className='textNewsContainer'>
                            <span className='titleNews'>{title}</span>
                            <div className='descriptionNews'>{description}</div>
                            {author !== null && <span className='authorNews'>{author}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    news: state.newsReducer.news
})

const mapDispatchToProps = {
    getNews,
}

export default connect(mapStateToProps, mapDispatchToProps)(News)