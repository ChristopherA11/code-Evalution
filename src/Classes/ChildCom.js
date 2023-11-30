import React, { Component } from 'react'

class ChildCom extends Component {
  render() {
    const {passVal,childName} = this.props
    return (
      <div>
        <button onClick={() => this.props.passVal ("everyone")}>Click</button>
      </div>
    )
  }
}
export default ChildCom;
