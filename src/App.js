import React, { Component } from 'react';
import './App.css';
import Input from './components/input';
import Button from './components/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:''
    }
  }

  getValue(value) {
    this.setState({input:value});
    console.log(value);
  }

  render() {
    return (
      <div className="App">
        <Input 
        changed={()=>this.getValue()}
        />
        <Button text="Save" />
      </div>
    );
  }
}

export default App;
