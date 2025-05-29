import React, { useState } from 'react';
import Tech from './techstack';
import './App.css';

function Demo() {
  const [a, b] = useState(0);
  function addOn() {
    b(prev => prev + 1);
  }

  function subOn() {
    b(prev => prev - 1);
  }

  return (
    <>
      <div className="container">
        <span><a href="https://portfolio-aman-seven.vercel.app/">Home</a></span>
        <div className="container_sub1">
          <div className="container_sub1_parta">
            <h1 className='rotate-text'>Counter <span>App</span></h1>
          </div>
          <div className="container_sub1_partb">
            <div className="text_button_a">
              <h1 className='text'>{a}</h1>
            </div>
            <div className="text_button_b">
              <button className='incre' onClick={addOn}>Add <span>One</span></button>
              <button className='decre' onClick={subOn}><span>Sub</span> One</button>
            </div>
            <Tech/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
