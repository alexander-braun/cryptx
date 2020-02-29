import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, axisLeft, scaleLinear, scaleBand } from "d3";
import ResizeObserver from "resize-observer-polyfill";

const useResizeObserver = ref => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

function BarChart({ data, alphabet, inputValue }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  const letterFrequency = () => {
    let result, map = {}
    inputValue.split("").forEach(e => map[e] = (map[e] || 0)+1);
    console.log(map)
  }
  letterFrequency()

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    // scales
    const xScale = scaleBand()
      .domain(alphabet.map((value, index) => value))
      .range([0, dimensions.width]) // change
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 15]) // todo
      .range([dimensions.height, 0]); // change

    const colorScale = scaleLinear()
      .domain([0, 20])
      .range(["#ffbdbf", "#fd000a"])
      .clamp(true);

    // create x-axis
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis);

    // create y-axis
    const yAxis = axisLeft(yScale);
    svg
      .select(".y-axis")
      .call(yAxis);

    // draw the bars
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(alphabet[index]))
      .attr("y", -dimensions.height)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", (value, index) => {
        svg
          .selectAll(".tooltip")
          .data([value])
          .join(enter => enter.append("text").attr("y", yScale(value) - 4))
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(alphabet[index]) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 8)
          .attr("opacity", 1);
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", value => dimensions.height - yScale(value));
    svg
      .selectAll('.circle')
      .data(data)
      .join('circle')
      .attr('class', 'circle')
      .style('transform', 'scale(1, -1)')
      .attr('r', 3.5)
      .attr('cx', (value, index) => xScale(alphabet[index]) + 3.5)
      .attr('cy', value =>  -dimensions.height + dimensions.height - yScale(value))

  }, [data, dimensions, alphabet]);

  return (
    <div ref={wrapperRef} className="svgWrapper" style={{ marginBottom: "2rem"}}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
}

export default BarChart;