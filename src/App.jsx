import React, { Component } from 'react';

import Header from './components/Header/Header';

import './App.css';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentAddKeyCode: 13
    }
  }

  commentKeyChange = (keyCode) => {
    // if (Number(keyCode)) {
      this.setState({ commentAddKeyCode: keyCode })
    // }
  }  

  render() {
    return (
      <div className="App">
        <Header />
        <Main {...this.state} commentKeyChange={this.commentKeyChange} />
      </div>
    )
  }
}

export default App;
