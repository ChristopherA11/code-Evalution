import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      }
      componentDidMount() {
        // console.log(this.inputRef);
        this.inputRef.current.focus()
      }
       handler =() => {
           alert(this.inputRef.current.value)
      }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handler}>Clcik</button>
      </div>
    )
  }
}

export default RefDemo