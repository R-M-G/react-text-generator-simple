import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    paras: 4,
    html: true,
    text: '',
  };

  componentDidMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios
      .get(
        'http://hipsterjesus.com/api?paras=' +
          this.state.paras +
          '&html=' +
          this.state.html
      )
      .then((response) => {
        this.setState({ text: response.data.text }, function () {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log("Error", err)
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Test Class</h1>
      </div>
    );
  }
}

export default App;
