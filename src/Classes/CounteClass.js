import React, { Component } from 'react'

class CounteClass extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        // this.setState({
        //     count: this.state.count - 1
        // },()=> {console.log("callbackValue",this.state.count)}
        // )
        this.setState(prevState => ({
            count:prevState.count + 1
        }))
        console.log(this.state.count);
    }
    incrementFive(){     //this method use increment 3
        this.increment()
        this.increment()
        this.increment()
    }
    
    

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* <button onClick={() => this.handelChange()}>decrement</button> */}
        <button onClick={() => this.incrementFive()}>increment</button>
      </div>
    )
  }
}

export default CounteClass