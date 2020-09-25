import React, { Component } from 'react';

class ParasSelect extends Component {
  state = {
    value: this.props.paras,
  };

  onChange(e) {
    this.setState({ value: e.target.value }, function () {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="number"
          min="1"
          max="10"
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default ParasSelect;
