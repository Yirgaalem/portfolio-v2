import React from 'react';
import './Copyright.css';
import copyright from '../../assets/icons/copyright.png';

export default function Copyright() {
  return (
    <div className='copyright'>
      <img src={copyright}/> Nahor Yirgaalem, 2023
    </div>
  );
}