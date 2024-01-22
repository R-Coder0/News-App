import React, { Component } from 'react';
import PropTypes from 'prop-types';

class News extends Component {
  static propTypes = {
    key: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    apikey: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      newsData: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const { pageSize, apikey, country, category } = this.props;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&pageSize=${pageSize}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          newsData: data.articles,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false,
        });
      });
  }

  render() {
    const { newsData, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        {/* Render news based on the data in this.state.newsData */}
        {newsData.map((article) => (
          // Render individual news article components here
          // You can create a separate component for displaying each article
          <div key={article.title}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default News;
