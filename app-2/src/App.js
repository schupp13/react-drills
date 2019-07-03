import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      stuff: ["tacos", "shoes", "watermelon", "toothbrush", "toilet paper"],
    }
  }

displayStuff = () =>{
 let  mapedStuff = this.state.stuff.map((value, i) =>{
    
      return <h2 key={i}>{value}</h2>
  })
    
  return mapedStuff
  
}

  render() {
    return (
      <div className="App">
        <h1>app 2</h1>
        {this.displayStuff()}
      </div>
    );
  }
}

export default App;
