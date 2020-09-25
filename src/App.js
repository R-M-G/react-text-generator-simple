import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    integer: 2,
    length: 'short',
    headers: 'headers',
    text: '',
  };

  componentDidMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios
      .get(
        'https://loripsum.net/api/' +
          this.state.integer + '/' +
          this.state.length + '/' +
          this.state.headers
      )
      .then((response) => {
        this.setState({ text: response.data }, function () {
          console.log(this.state.text);
        });
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <h1>Test Class</h1>
      </div>
    );
  }
}

export default App;
