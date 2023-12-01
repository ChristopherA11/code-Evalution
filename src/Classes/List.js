import React from 'react'

const List = () => {
    const names = ["rahul", "antony", "mark"]
    const nameList = names.map((item,index) => <h2 key={index}>{item}</h2>)
  return (
    <div>{nameList}</div>
  ) 
}

export default List