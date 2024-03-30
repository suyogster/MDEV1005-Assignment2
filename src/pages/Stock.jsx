import React, { useEffect } from 'react';

const Stock = () => {
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo'
        );
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching Stock:', error);
      }
    };
    fetchStockData();
  }, []);

  return <p>Hello</p>;
};

export default Stock;
