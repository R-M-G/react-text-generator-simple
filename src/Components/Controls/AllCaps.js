import React, { Component } from 'react';

class AllCaps extends Component {
  state = {
    value: this.props.caps,
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
          <option value="null">No</option>
          <option value="allcaps">Yes</option>
        </select>
      </div>
    );
  }
}

export default AllCaps;
