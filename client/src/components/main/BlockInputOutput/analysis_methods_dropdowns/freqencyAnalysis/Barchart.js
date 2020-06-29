import React, { useRef, useEffect } from 'react';
import { select, axisBottom, axisLeft, scaleLinear, scaleBand } from 'd3';
import * as d3 from 'd3';
import useResizeObserver from '../../../../main/helper/Resizeobserver';

function BarChart({ data, alphabet, inputValue }) {
  const input = inputValue ? inputValue : ' ';
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  console.log(data);
  // will be called initially and on every data change
  useEffect(() => {
    if (!input) return undefined;
    //if(container[0].clientHeight <= 46) return undefined
    const letterFrequency = () => {
      let map = new Array(26).fill(0);
      for (let element of input.toString()) {
        let index = alphabet.indexOf(element.toLowerCase());
        if (index !== -1) map[index] += 1;
      }
      return map;
    };

    const frequency = () => {
      let arr = letterFrequency();
      let totalLetters = arr.reduce((a, b) => a + b, 0);
      let freq = new Array(26).fill(0);

      let index = 0;
      for (let char of arr) {
        if (char !== 0) freq[index] = (char / totalLetters) * 100;
        index++;
      }
      return freq;
    };

    frequency();

    const svg = select(svgRef.current);

    if (!dimensions) return;

    // scales
    const xScale = scaleBand()
      .domain(alphabet.map((value, index) => value))
      .range([0, dimensions.width]) // change
      .padding(0.2);

    let frequencyMax;
    d3.max(frequency()) > 15
      ? (frequencyMax = d3.max(frequency()))
      : (frequencyMax = 15);

    const yScale = scaleLinear()
      .domain([0, frequencyMax]) // todo
      .range([dimensions.height, 0]); // change

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
      .data(frequency())
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
  }, [data, dimensions, alphabet, input]);

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

export default BarChart;
