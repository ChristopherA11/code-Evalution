import React, { Component } from 'react'
import ChildCom from './ChildCom'

class ParanentCom extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"hello"
        }
        this.changeVal=this.changeVal.bind(this)
    }
    changeVal=(childName)=>{
        alert(`welcome ${this.state.message},${childName}`)
    }
  render() {
    return (
      <div>
        <ChildCom passVal={this.changeVal}/>
      </div>
    )
  }
}

export default ParanentCom