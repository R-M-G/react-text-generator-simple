import React, { Component } from 'react';

class ParaSize extends Component {
  state = {
    value: this.props.length,
  };

  onChange(e) {
    this.setState({ value: e.target.value }, function () {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <select className="form-control" onChange={this.onChange.bind(this)}>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
          <option value="verylong">Very Long</option>
        </select>
      </div>
    );
  }
}

export default ParaSize;