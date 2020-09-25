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
        <select className="form-control" onChange={this.onChange.bind(this)}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    );
  }
}

export default ParasSelect;
