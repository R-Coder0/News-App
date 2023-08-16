import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = `${capitalizedFirstLetter(props.category)} - NewsHub`

    const capitalizedFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=0480a24c974242de90dbd871eda6d1ab&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)

    }

    useEffect(() => {
        updateNews()
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=0480a24c974242de90dbd871eda6d1ab&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)

    };

        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop:'90px' }}>NewsHub - Top {capitalizedFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner/>}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.concat !==totalResults}
                // loader={<Spinner />}
                >
                    <div className="container">

                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 72) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>

                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )

    }
    News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    News.defaultProps = {
        country: "in",
        pageSize: 5,
        category: 'General'
    }
export default News