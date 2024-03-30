import React from 'react';
import { Helmet } from 'react-helmet';

const Weather = () => {
  const title = 'Weather';

  return (
    <>
      <Helmet />
      <title>{title}</title>

      <div className='container-fluid'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>{title}</h1>
        </div>

        <div className='container-fluid'>
          <div className='column g-0 border rounded overflow-hidden flex-md-colu mb-4 shadow-sm h-md-250 position-relative'>
            <div className='col p-4 d-flex flex-column position-static'>
              <strong className='d-inline-block mb-2 text-primary fs-5'>
                -
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
