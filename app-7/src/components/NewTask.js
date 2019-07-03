import React, { Component } from "react";

class NewTask extends Component {
  constructor(){
    super();
    this.state = {
      input : ''
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(value) {
    
    this.setState({ input: value });
    console.log(this.state.input);
  }

  handleAdd(){
    let val = this.state.input;
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render(){
    return (
      <div>
        <input onChange={e => this.handleInputChange(e.target.value)}></input>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}

export default NewTask;
