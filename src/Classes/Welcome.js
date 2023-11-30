import React, { Component } from "react";


class Welcome extends Component {
    render(){
       // const {name} = this.props //use class component destuctring render
    return(
        <div>
            <h1>welcome {this.props.name}</h1>
        </div>
    )
    }
}
export default Welcome