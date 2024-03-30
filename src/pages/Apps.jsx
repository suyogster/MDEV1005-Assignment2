import { Helmet } from 'react-helmet';
import Calculator from '../components/Calculator';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalculatorV1 from '../components/CalculatorV1';

// This functional component represents the main application screen, which displays a custom set of tools.
function Apps() {
  const title = 'Custom Tools';
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className='container-fluid'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>{title}</h1>
        </div>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>Calculator</h1>
        </div>
        <div className='column g-0 border rounded overflow-hidden flex-md-colu mb-4 shadow-sm h-md-250 position-relative'>
          <Calculator />
        </div>

        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>Calculator V1</h1>
        </div>
        <div className='column g-0 border rounded overflow-hidden flex-md-colu mb-4 shadow-sm h-md-250 position-relative'>
          <CalculatorV1 />
        </div>

        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>Calender</h1>
        </div>
        <div className='column g-0 border rounded overflow-hidden flex-md-colu mb-4 shadow-sm h-md-250 position-relative'>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </>
  );
}

export default Apps;
