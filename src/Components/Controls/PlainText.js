import React, { Component } from 'react';

class PlainText extends Component {
  state = {
    value: this.props.style,
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
          <option value="plaintext">Yes</option>
          <option value="null">No</option>
        </select>
      </div>
    );
  }
}

export default PlainText;
