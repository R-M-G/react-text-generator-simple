import React, { Component } from 'react';
import axios from 'axios';
import Output from './Components/Output/Output';
import ParasSelect from './Components/Controls/ParasSelect';
import ParaSize from './Components/Controls/ParaSize';
import HeaderSelection from './Components/Controls/HeaderSelection';
import AllCaps from './Components/Controls/AllCaps';
import PlainText from './Components/Controls/PlainText';

class App extends Component {
  state = {
    paras: 1,
    length: 'short',
    headers: 'headers',
    caps: null,
    style: 'plaintext',
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
          this.state.headers +
          '/' +
          this.state.caps +
          '/' +
          this.state.style
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

  changeHeaders(headersX) {
    this.setState({ headers: headersX }, this.getSampleText);
  }

  changeUnl(capsX) {
    this.setState({ caps: capsX }, this.getSampleText);
  }

  changeTextType(textTypeX) {
    this.setState({ style: textTypeX }, this.getSampleText);
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App container">
        <h1 className="heading-center">React JS Simple Text Generator</h1>
        <hr />

        <form className="form-inline">
          <div className="form-group">
            <label>Number of Paragraphs: </label>
            <ParasSelect
              value={this.state.paras}
              onChange={this.changeParagraphs.bind(this)}
            />

            <label>Headers</label>
            <HeaderSelection
              value={this.state.headers}
              onChange={this.changeHeaders.bind(this)}
            />

            <label>Caps</label>
            <AllCaps
              value={this.state.caps}
              onChange={this.changeUnl.bind(this)}
            />

            <label>Paragraph Size: </label>
            <ParaSize
              value={this.state.length}
              onChange={this.changeLength.bind(this)}
            />

            <label>Plaintext</label>
            <PlainText
              value={this.state.style}
              onChange={this.changeTextType.bind(this)}
            />
          </div>
        </form>
        <hr />
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
