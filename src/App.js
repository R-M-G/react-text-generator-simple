import React, { Component } from 'react';
import axios from 'axios';
import Output from './Components/Output/Output';
import ParasSelect from './Components/Controls/ParasSelect';
import ParaSize from './Components/Controls/ParaSize';
import './App.css';

class App extends Component {
  state = {
    paras: 1,
    length: 'medium',
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

  changeParagraphs(numX) {
    this.setState({ paras: numX }, this.getSampleText);
  }

  changeLength(lengthX) {
    this.setState({ length: lengthX }, this.getSampleText);
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App container">
        <h1>React JS Simple Text Generator</h1>
        <hr />

        <form className="form-inline">
          <div className="form-group">
            <label>Number of Paragraphs: </label>
            <ParasSelect
              value={this.state.paras}
              onChange={this.changeParagraphs.bind(this)}
            />
          </div>
          <label>Paragraph Size: </label>
          <ParaSize
            value={this.state.length}
            onChange={this.changeLength.bind(this)}
          />
        </form>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
