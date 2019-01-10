import React, { Component } from 'react';
import * as d3 from 'd3';

export default class LabeledArc extends Component {
  render() {
    const [labelX, labelY] = this.arc.centroid(this.props.data);
    const labelTranslate = `translate(${labelX}, ${labelY})`;
    
    return (
      <g>

      </g>
    );
  }
};