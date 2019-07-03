import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      stuff: ["tacos", "shoes", "watermelon", "toothbrush", "toilet paper"],
      userInput: ''
    }
  }

  changeHandler = (e) =>{
    this.setState({
      userInput: e.target.value,
    })
    
  }

  filterList = () =>{
    let map = this.state.stuff.map((value, i) =>{
      // startsWith could use if you wanted to be more strict with search
      if(value.includes(this.state.userInput)){
        return <h2 key={i}>{value}</h2>
      }
      
    })
    return map;
    }

 
  render() {
    return (
      <div className="App">
        <h1>App 3</h1>
        <input onChange={this.changeHandler} />
        {this.filterList()}
      </div>
    );
  }
}

export default App;
