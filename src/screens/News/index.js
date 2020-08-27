import React, {useEffect} from 'react'
import {connect} from 'react-redux';

import {getNews} from '../../redux/actions/news'
import './style.css'
import HeaderOfScreens from "../../components/HeaderOfScreens";
import {selectNews} from "../../redux/selectors/news";

function News ({news, getNews}) {

    const allNews = news.articles

    useEffect(() => {
        getNews()
    }, [])                                                                                                                  // eslint-disable-line react-hooks/exhaustive-deps

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
    news: selectNews(state)
})

const mapDispatchToProps = {
    getNews,
}

export default connect(mapStateToProps, mapDispatchToProps)(News)