import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    paras: 10,
    headers: true,
    text: '',
  };

  componentDidMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios
      .get(
        'http://loripsum.net/api?paras=' +
          this.state.paras +
          '&headers=' +
          this.state.headers
      )
      .then((response) => {
        this.setState({ text: response.data }, function () {
          console.log(this.state);
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
