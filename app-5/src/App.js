import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image";

class App extends Component {
  constructor(){
    super();
    this.state = {
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/BakedPotatoWithButter.jpg',
    }
  }
  render() {
    return (
      <div className="App">
        <h1>App 5</h1>
          <Image img={this.state.img}/>
      </div>
    );
  }
}

export default App;
