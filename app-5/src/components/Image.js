import React, {Component} from 'react';

class Image extends Component{
  constructor(){
    super();
    
  }

  render(){
    return(
      <div>
        <img src={this.props.img} />
      </div>
    )
  }
}

export default Image