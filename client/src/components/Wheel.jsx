import React, { Component } from 'react';
import * as d3 from 'd3';
import { exampleData } from './../../../exampleData.js';
import styled, { keyframes } from 'styled-components';

// TODO: this spins a random amount of degrees but rarely will do a full rotation after first spin
export default class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: false,
    }
    this.height = 400;
    this.width = 400;
    this.colors = d3.scaleOrdinal(d3.schemeAccent);
    this.arc = d3.arc().innerRadius(10).outerRadius(100);
    this.spinWheel = this.spinWheel.bind(this);
  }

  spinWheel(e) {
    this.setState({ spinning: true });
  }

  render() {
    const pie = d3.pie()([1, 1, 1, 1, 1]);
    const translate = `translate(${this.width / 2}, ${this.height / 2})`;
    const interpolate = d3.interpolateRgb('#eaaf79', '#bc3358');
    const transform = `rotate(${(Math.random() * (360 * 5))}deg)`;
    return (
      <div>
        <svg height={this.height} width={this.width} className='wheel' style={this.state.spinning ? { transform } : {}}>
          <g transform={translate}>
            {pie.map((data, index) => {
              const sliceColor = interpolate(index / (pie.length - 1));
              return <path key={index} d={this.arc(data)} fill={sliceColor}/>
            })}
          </g>
        </svg>
        <button onClick={this.spinWheel}>Spin</button>
      </div>
    );
  }
};