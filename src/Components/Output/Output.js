import React, { Component } from 'react';

class Output extends Component {
  state = {
    value: this.props.text,
  };

  render() {
    return <div className="output">
      {this.props.value}</div>;
  }
}

export default Output;
