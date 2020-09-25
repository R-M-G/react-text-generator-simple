import React, { Component } from 'react';

class UnorderedList extends Component {
  state = {
    value: this.props.unl,
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
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    );
  }
}

export default UnorderedList;