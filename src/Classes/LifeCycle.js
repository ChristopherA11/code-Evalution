import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "john"
      }
      console.log("lifeCycle Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifeCycle getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("lifeCycle componentDidMount");
    }
  render() {
    console.log("lifeCycle Render")
    return (
      <div>LifeCycle</div>
    )
  }
}

export default LifeCycle