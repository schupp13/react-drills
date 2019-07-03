import React ,{Component} from 'react';

class Todo extends Component {
  constructor(){
    super();
  }


  render(){
    return (
      <div>
          <ul>{this.props.list}</ul>
          <input  value={this.props.value}
            placeholder="Enter new task" onChange={this.props.changeHandler} />
          <button onClick={this.props.addTodo}>Add</button>
      </div>
    )
  }
}

export default Todo;
