import React from 'react';

export const SvgBottom = () => {
  return (
    <svg
      id='curveUpColor'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      width='100%'
      height='100'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
    >
      <defs>
        <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop
            offset='0%'
            style={{ stopColor: 'rgb(13, 78, 115)', stopOpacity: '1' }}
          />
          <stop
            offset='100%'
            style={{ stopColor: 'rgb(23, 114, 167)', stopOpacity: '1' }}
          />
        </linearGradient>
      </defs>
      <path d='M0 100 C 20 0 50 0 100 100 Z' fill='url(#grad1)'></path>
    </svg>
  );
};
