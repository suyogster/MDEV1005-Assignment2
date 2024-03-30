import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
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

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>News</h1>
      </div>
      <div className='column g-0 border rounded overflow-hidden flex-md-colu mb-4 shadow-sm h-md-250 position-relative'>
        <div className='col p-4 d-flex flex-column position-static'>
          <strong className='d-inline-block mb-2 text-primary fs-5'>
            News Headline
          </strong>

          <div>
            {news.map((article, index) => (
              <div key={index} className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{article.title}</h5>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <p>{article.author}</p>
                    </li>
                    <li className='list-group-item'>
                      <p>{article.description}</p>
                    </li>
                    <li className='list-group-item'>
                      <pre>{article.content}</pre>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
