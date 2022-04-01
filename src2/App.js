import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import ShoutInput from './ShoutInput/ShoutInput';
import ShoutOutput from './ShoutOutput/ShoutOutput';

class App extends Component {

  state = {
   currentshout: ""
  }


updateShoutHandler = (event) => {
  this.setState({currentshout: event.target.value})
  };


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day (1+1) / Make to upper case</h2>
          <h3>You write something in the bar; the text will become uppercased</h3>
        </header>


        <ShoutInput 
        changed={this.updateShoutHandler}
        />
      
        <ShoutOutput
        shout={(this.state.currentshout).toUpperCase()}
        />

      </div>
    );
  }
}

export default App;