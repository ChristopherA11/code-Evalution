import React, { PureComponent } from 'react'

class RegCom extends PureComponent {
  render() {
    console.log("reg Com");
    return (
      <div>RegCom {this.props.name}
      </div>
    )
  }
}

export default RegCom