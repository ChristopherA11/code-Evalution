import React, { Component } from "react";

class ClassState extends Component{
    constructor(){
        super()
        this.state ={
            message: "Visit our Webpage"
        }
    }
    handelChange(){
        this.setState ({
          message:  "thaks for visit"
        }) 
    }
    
    render(){
        return(
            <div>
                 <h3>{this.state.message}</h3>
                 <button onClick={() => this.handelChange()}>Click Me!</button>
            </div>
        )
    }
}
export default ClassState;