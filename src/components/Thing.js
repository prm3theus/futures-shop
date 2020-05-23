import React, {useState} from 'react';
import './thing.css'

function Thing(props) {
  return (
    <div className='thing'>
      <div className='symbol'>
      {props.symbol}
      </div>
      <div className="button-wrapper">
        <button className='button'>buy</button>
      </div>
    </div>
  );
}

export default Thing;
