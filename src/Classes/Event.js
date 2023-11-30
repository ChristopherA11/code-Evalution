import React, { Component } from 'react'

export class Event extends Component {
    handelClick(){
        console.log("button Clicked");
    }
  render() {
    return (
      <div>
        <button onClick={this.handelClick}>Click Me</button>
      </div>
    )
  }
}

export default Event