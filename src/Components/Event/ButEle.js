import React from 'react'

const ButEle = () => {
    const handelClick = () => {
        console.log("clicked");
    }
  return (
    <div>
        <button onClick={ handelClick}>Clcik</button>
    </div>
  )
}

export default ButEle