import React, { useState } from 'react';
import Tech from './techstack';
import './App.css';

function Demo() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  function addOn() {
    if (count >= 10) {
      setError("Can't go above 10");
    } else {
      setCount(prev => prev + 1);
      setError('');
    }
  }

  function subOn() {
    if (count <= 0) {
      setError("Can't go below 0");
    } else {
      setCount(prev => prev - 1);
      setError('');
    }
  }

  return (
    <>
      <div className="container">
        <div className="home"><span><a href="https://portfolio-aman-seven.vercel.app/">Home</a></span></div>
        <br />
        <div className="container_sub1">
          <div className="container_sub1_parta">
            <h1 className='rotate-text'>Counter <span>App</span></h1>
          </div>
          <div className="container_sub1_partb">
            <div className="text_button_a">
              <h1 className='text'>{count}</h1>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div className="text_button_b">
              <button className='incre' onClick={addOn}>Add <span>One</span></button>
              <button className='decre' onClick={subOn}><span>Sub</span> One</button>
            </div>
            <Tech />
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
