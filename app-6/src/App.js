import React, { Component } from "react";
import "./App.css";
import Todo from './components/Todo'

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      todo: ['Cheese', 'Yarn', 'Cat', 'Mouse'],
      userInput: ''
    }
  }

  display = () =>{
    let map = this.state.todo.map((value)=>{
      return <li>{value}</li>;
    });
    return map;
  }

  addTodo = () =>{
    this.setState({todo:[...this.state.todo, this.state.userInput]
      
  });
  
    


}

  changeHandler = (e) =>{
    this.setState({userInput: e.target.value})
    
    
  }

  
    
  
  render() {
    return (
      <div className="App">
        <Todo list={this.display()} changeHandler={this.changeHandler}  addTodo={this.addTodo} value={this.state.userInput} />
        
      </div>
    );
  }
}

export default App;
