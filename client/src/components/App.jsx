import React from 'react';
import Wheel from './Wheel.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Wheel/>
      </div>
    );
  }
};