import React, { Fragment } from 'react'

export default () => (
    <Fragment>
        <svg style={{margin: 'auto', background: 'transparent', display: 'block', shapeRendering: 'auto', width:'200px', height:'200px'}} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <path fill="none" stroke="#ff586e" stroke-width="5" strokeDasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style={{transform:'scale(1)', transformOrigin:'50px 50px'}}>
                <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="2s" keyTimes="0;1" values="0;256.58892822265625"></animate>
            </path>
        </svg>
    </Fragment>
)