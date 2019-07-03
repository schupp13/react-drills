import React, {Component} from 'react';


class Login extends Component{
  constructor(){
    super();
    this.state = {
      user: '',
      password: ''
    }
  }

  changeInput1 = (e) =>{
    this.setState({user: e.target.value})
  }

  changeInput2 = (e) =>{
    this.setState({password: e.target.value})
  }

  clickMessage = () =>{
     alert("UserName: " + this.state.user + "    Password: " + this.state.password);
  }

  render() {
    return(
      <div>
     <input onChange={this.changeInput1}></input>
       <input onChange={this.changeInput2}></input>
       <button onClick={this.clickMessage}>Log in</button>
      </div>
    )
  }
}

export default Login;