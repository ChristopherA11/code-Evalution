import React, { Component } from 'react'

class Email extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            message: "",
            Topic:"React",
        }
    }
    handelChange(e){
      this.setState({
        email:e.target.value
      })
    }

    handelComments = e =>{
        this.setState({
            message:e.target.value
        })
    }

    handelTopic = e => {
        this.setState({
            Topic:e.target.value
        })
    }
    handelSubmit = e => {
        alert (`${this.state.message},${this.state.Topic} ${this.state.email}`)
        e.preventDefault()
    }
  render() {
    const {message,email,Topic} = this.state
    return (
      <form onSubmit={this.handelSubmit}>
        <label >User Name</label>
        <input 
            type="text"
            id='mail'
            placeholder='Enter ur mail'
            value ={email}
            onChange={(e) => this.handelChange(e)}
         />
         <div>
         <label>comments</label>
         <textarea
            value={message} 
            onChange={this.handelComments}></textarea>
         </div>
         <div>
            <label value={Topic} onChange={this.handelTopic}>Topic</label>
            <select>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
         </div>
         <button type='submit'>submit</button>
      </form>
    )
  }
}
export default Email