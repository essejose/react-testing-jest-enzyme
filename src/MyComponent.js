import React, { Component } from 'react';
import { getUser } from './api/github'


const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

class MyComponent extends Component {
  
  constructor(props){
    super(props)
    this.state={
      name:'jose',
      user: {}
    }
    getUser('essejose').then(data => {
      this.setState({ user: data.entity })
    })
  }
 
  render() {
    const { user } = this.state; 
    return (
      <div className="MyComponent">
     	  MyComponent	

         <ul style={{ listStyle: 'none' }}>
          {
            Object.keys(user).map(key => renderLine(user, key))
          }
        </ul>
      </div>
    );
  }
}
export default MyComponent;