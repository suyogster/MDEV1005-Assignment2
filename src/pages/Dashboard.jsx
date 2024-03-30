import { Helmet } from 'react-helmet';
import Jdenticon from '../components/Jdenticon';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const title = 'Dashboard';

  const { getCurrentUser } = useAuth();
  const [user, setUser] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
  });
  const [stockData, setStockData] = useState([]);
  const [news, setNews] = useState([]);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      setUser(await getCurrentUser());
    };
    getUsers();
  }, []);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          'https://techy-api.vercel.app/api/json'
        );
        setQuote(response.data.message);
      } catch (error) {
        console.error('Error fetching Quotes:', error);
      }
    };
    fetchQuote();
  }, []);

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

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo'
        );
        setStockData(response.data['Meta Data']);
        console.log(stockData);
      } catch (error) {
        console.error('Error fetching Stock:', error);
      }
    };
    fetchStockData();
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className='container-fluid'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>{title}</h1>
        </div>
        <div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
          <div className='col p-4 d-flex flex-column position-static'>
            <strong className='d-inline-block mb-2 text-primary fs-5'>
              @{user.username}
            </strong>
            <h3 className='mb-0'>
              {user.firstname} {user.lastname}
            </h3>
            <p className='card-text mb-auto text-muted'>{user.id}</p>
            <p className='card-text mb-auto text-muted'>{user.email}</p>
            <div className='d-grid d-md-block mt-4'>
              <button className='btn btn-outline-secondary btn-sm'>Edit</button>
            </div>
          </div>
          <div className='col-auto d-none d-lg-block'>
            <div className='pt-3 pe-3'>
              <Jdenticon name={user.username} height='96px' width='96px' />
            </div>
            <div className='pt-3 pe-3'></div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>Quote Per Refresh</h1>
        </div>
        <div className='column g-0 border rounded overflow-hidden flex-md-colu mb-4 shadow-sm h-md-250 position-relative'>
          <div className='col p-4 d-flex flex-column position-static'>
            <strong className='d-inline-block mb-2 text-primary fs-5'>
              - {quote}
            </strong>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>News</h1>
        </div>
        <div className='column g-0 border rounded overflow-hidden flex-md-colu mb-4 shadow-sm h-md-250 position-relative'>
          <div className='col p-4 d-flex flex-column position-static'>
            <strong className='d-inline-block mb-2 text-primary fs-5'>
              News Headline
            </strong>

            {news.map((article, index) => (
              <li key={index}>
                <a href={article.url}>{article.title}</a>
              </li>
            ))}
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>Stock Info</h1>
        </div>
        <div className='column g-0 border rounded overflow-hidden flex-md-colu mb-4 shadow-sm h-md-250 position-relative'>
          <div className='col p-4 d-flex flex-column position-static'>
            <strong className='d-inline-block mb-2 text-primary fs-5'>
              Ticker Symbol of the day
            </strong>
            {Object.keys(stockData).map((key, index) => (
              <p key={index} className='card-text mb-auto text-muted'>
                {key}: {stockData[key]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
