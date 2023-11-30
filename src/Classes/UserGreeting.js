import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {
    return this.state.isLoggedIn ? (<div>welcome chris</div>) : (<div>welcome</div>)
    // let message;
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Chris</div>
    // }else{
    //     message= <div>Welcome</div>
    // }

    // return <div>{message}</div>
    // if(this.state.isLoggedIn){
    //     return <div>welcome chris</div>
    // }else {
    //     return <div>welcome</div>
    // }
    // return (
    //   <div>

    //   </div>
    // )
  }
}

export default UserGreeting