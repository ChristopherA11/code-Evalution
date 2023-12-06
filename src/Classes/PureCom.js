import React, { PureComponent } from 'react'

class PureCom extends PureComponent {
  render() {
    console.log("pure Com");
    return (
      <div>
        pure component {this.props.name}
      </div>
    )
  }
}

export default PureCom