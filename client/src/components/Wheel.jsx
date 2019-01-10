import React, { Component } from 'react';
import * as d3 from 'd3';
import { exampleData } from './../../../exampleData.js';

export default class Wheel extends Component {
  constructor(props) {
    super(props);
    this.height = 400;
    this.width = 400;
    this.colors = d3.scaleOrdinal(d3.schemeAccent);
    this.arc = d3.arc().innerRadius(0).outerRadius(100);
  }
  spinWheel(e) {
  
  }
  render() {
    const pie = d3.pie()([1, 1, 1, 1, 1]);
    const translate = `translate(${this.width / 2}, ${this.height / 2})`;
    const interpolate = d3.interpolateRgb('#eaaf79', '#bc3358');
    return (
      <svg height={this.height} width={this.width} onClick={this.spinWheel}>
        <g transform={translate}>
          {pie.map((data, index) => {
            const sliceColor = interpolate(index / (pie.length - 1));
            return <path d={this.arc(data)} fill={sliceColor}/>
          })}
        </g>
      </svg>
    );
  }
};