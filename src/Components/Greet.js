import React from 'react'

const Greet = (props) => {
  return (
    <div>Greet {props.name} {props.heroName}
    {props.children}
    </div>
  )
}

export default Greet