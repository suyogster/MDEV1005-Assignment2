import React, { useEffect } from 'react';

const News = () => {
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=b2600c1e6c824728a22f2f5901f3ac22'
        );
        console.log(response);
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);
  return <p>hello</p>;
};

export default News;
