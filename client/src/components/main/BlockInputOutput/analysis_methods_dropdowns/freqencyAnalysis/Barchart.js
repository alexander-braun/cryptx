import React, { useRef, useEffect } from 'react';
import { select, axisBottom, axisLeft, scaleLinear, scaleBand } from 'd3';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

//Helper
import useResizeObserver from '../../../../main/helper/Resizeobserver';

//Assets
import frequency from './frequency-analysis-logic.js';

function BarChart({ data, alphabet, inputValue }) {
  const input = inputValue ? inputValue : ' ';
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const svg = select(svgRef.current);

  useEffect(() => {
    if (!input) return undefined;
    if (!dimensions) return;

    // scales
    const xScale = scaleBand()
      .domain(alphabet.map((value, index) => value))
      .range([0, dimensions.width])
      .padding(0.2);

    let frequencyMax;
    d3.max(frequency(input, alphabet)) > 15
      ? (frequencyMax = d3.max(frequency(input, alphabet)))
      : (frequencyMax = 15);

    const yScale = scaleLinear()
      .domain([0, frequencyMax])
      .range([dimensions.height, 0]);

    const colorScale = scaleLinear()
      .domain([0, 20])
      .range(['#ffadb7', '#ff0022'])
      .clamp(true);

    // create x-axis
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .select('.x-axis')
      .style('transform', `translateY(${dimensions.height}px)`)
      .call(xAxis);

    // create y-axis
    const yAxis = axisLeft(yScale);
    svg.select('.y-axis').call(yAxis);

    // draw the bars
    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .style('transform', 'scale(1, -1)')
      .attr('x', (value, index) => xScale(alphabet[index]))
      .attr('y', -dimensions.height)
      .attr('width', xScale.bandwidth())
      .on('mouseenter', (value, index) => {
        svg
          .selectAll('.tooltip')
          .data([value])
          .join((enter) => enter.append('text').attr('y', yScale(value) - 4))
          .attr('class', 'tooltip')
          .text(value)
          .attr('x', xScale(alphabet[index]) + xScale.bandwidth() / 2)
          .attr('text-anchor', 'middle')
          .transition()
          .attr('y', yScale(value) - 8)
          .attr('opacity', 1)
          .attr('fill', 'white');
      })
      .on('mouseleave', () => svg.select('.tooltip').remove())
      .transition()
      .attr('fill', colorScale)
      .attr('height', (value) => dimensions.height - yScale(value));
    svg
      .selectAll('.circle')
      .data(frequency(input, alphabet))
      .join('circle')
      .attr('class', 'circle')
      .style('transform', 'scale(1, -1)')
      .attr('r', xScale.bandwidth() / 5)
      .attr(
        'cx',
        (value, index) => xScale(alphabet[index]) + xScale.bandwidth() / 2
      )
      .attr(
        'cy',
        (value) => -dimensions.height + dimensions.height - yScale(value)
      )
      .attr('fill', '#ffffff20')
      .style('stroke', '#00a1ff')
      .on('mouseenter', (value, index) => {
        svg
          .selectAll('.tooltip')
          .data([value.toFixed(2)])
          .join((enter) => enter.append('text').attr('y', yScale(value) - 4))
          .attr('class', 'tooltip')
          .text(value.toFixed(2))
          .attr('x', xScale(alphabet[index]) + xScale.bandwidth() / 2)
          .attr('text-anchor', 'middle')
          .transition()
          .attr('y', yScale(value) - 8)
          .attr('opacity', 1)
          .attr('fill', 'white');
      });
  }, [data, dimensions, alphabet, input, svg]);

  return (
    <div
      ref={wrapperRef}
      className='svgWrapper'
      style={{ marginBottom: '1em' }}
    >
      <svg ref={svgRef}>
        <g className='x-axis' />
        <g className='y-axis' />
      </svg>
    </div>
  );
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  alphabet: PropTypes.arrayOf(PropTypes.string).isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default BarChart;
