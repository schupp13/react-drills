import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput : '',
      
    }
  }

changeHandler =(e) =>{
  this.setState({
    userInput: e.target.value,
  })
}

  render() {
    return (
      <div className="App">
        <input onChange={this.changeHandler}></input>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App;
