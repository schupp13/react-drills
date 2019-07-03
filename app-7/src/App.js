import React, { Component } from "react";
import NewTask from './components/NewTask';
import List from './components/List';
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state ={
      todo: ["Cheese", "Milk", "Hotdogs"],
      
    }

    // this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    console.log(task);
    // this.setState({todo: [...this.state.todo, task]});
    //  this.setState({ todo: [...this.state.list, task] });
  }

  render(){
    return (
      <div className="App">
        <h1>App 7</h1>
        <NewTask add={this.handleAddTask}/>
        
        <List todoList={this.state.todo}/> 
      </div>
    );
  }
}

export default App;
