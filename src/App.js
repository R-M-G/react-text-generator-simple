import React, { Component } from 'react';
import axios from 'axios';
import Output from './Components/Output/Output';
import ParasSelect from './Components/Controls/ParasSelect';
import './App.css';

class App extends Component {
  state = {
    paras: 0,
    length: '',
    headers: '',
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
      <div className="App container">
        <h1>React JS Simple Text Generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Number of Paragraphs</label>
            <ParasSelect value={this.state.paras} />
          </div>
        </form>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
