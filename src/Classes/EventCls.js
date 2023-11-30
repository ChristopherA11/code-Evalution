import React, { Component } from 'react'

export class EventCls extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"pass"
        }
    }
    // hanndelChange(){
    //    this.setState({
    //     message:"passed"
    //    })
    //    console.log(this);
    // }
    hanndelChange =() => {
        this.setState({
            message:"byeee"
        })
    }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.hanndelChange.bind(this)}>BTnEl</button> */}      
         {/* <button onClick={() => this.hanndelChange()}>Btn</button>  */}
         <button onClick={this.hanndelChange}>Btn</button>
      </div>
    )
  }
}

export default EventCls