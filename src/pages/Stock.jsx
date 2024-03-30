import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Stock = () => {
  const [stockData, setStockData] = useState([]);
  const [stockTimeSeries, setStockTimeSeries] = useState([]);
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo'
        );

        setStockData(response.data['Meta Data']);
        setStockTimeSeries(response.data['Time Series (Daily)']);
      } catch (error) {
        console.error('Error fetching Stock:', error);
      }
    };
    fetchStockData();
  }, []);

  return (
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

          <div>
            {Object.keys(stockTimeSeries).map((date, index) => (
              <div key={index} className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{date}</h5>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      Open: {stockTimeSeries[date]['1. open']}
                    </li>
                    <li className='list-group-item'>
                      High: {stockTimeSeries[date]['2. high']}
                    </li>
                    <li className='list-group-item'>
                      Low: {stockTimeSeries[date]['3. low']}
                    </li>
                    <li className='list-group-item'>
                      Close: {stockTimeSeries[date]['4. close']}
                    </li>
                    <li className='list-group-item'>
                      Volume: {stockTimeSeries[date]['5. volume']}
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

export default Stock;
