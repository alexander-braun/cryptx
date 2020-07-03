import React from 'react';

export const SvgTop = () => {
  return (
    <svg
      fill='rgb(23, 114, 167)'
      id='curveDownColor'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      width='100%'
      height='15vh'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
    >
      <linearGradient id='grad2' x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop
          offset='0%'
          style={{ stopColor: 'rgb(13, 78, 115)', stopOpacity: '1' }}
        />
        <stop
          offset='100%'
          style={{ stopColor: 'rgb(23, 114, 167)', stopOpacity: '1' }}
        />
      </linearGradient>
      <path d='M0 0 C 50 100 80 100 100 0 Z' fill='url(#grad2)'></path>
    </svg>
  );
};
