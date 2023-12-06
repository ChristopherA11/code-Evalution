import React, { Component } from 'react'
// import PureCom from './PureCom'
// import RegCom from './RegCom'
import MemoCom from './MemoCom'

class parenCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "james"
      }
    }
    // componentDidMount(){
    //     setInterval(()=> {
    //         this.setState({
    //            name:"james"
    //         })
    //     },2000)
    // }
  render() {
    console.log("parent Com");
    return (
      <div>parenCom
        <MemoCom name={this.state.name}/>
        {/* <PureCom name={this.state.name}/> */}
        {/* <RegCom name={this.state.name} /> */}
      </div>
    )
  }
}

export default parenCom