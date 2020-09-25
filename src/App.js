import React, { Component } from 'react';
import axios from 'axios';
import Output from '../src/Components/Output';
import './App.css';

class App extends Component {
  state = {
    paras: 1,
    length: 'long',
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
          this.state.paras +
          '/' +
          this.state.length +
          '/' +
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
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
