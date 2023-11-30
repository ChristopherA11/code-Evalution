import React from 'react'

const List = () => {
    const names = ["rahul", "antony", "mark"]
  return (
    <div>
        {names.map(name => 
            <h3>{name}</h3>)}
    </div>
  )
}

export default List