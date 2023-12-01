import React from 'react'

function NameList() {
    const personList = [
        {id: 0, name: "john", age: 22},
        {id: 1, name: "kumar", age: 25},
        {id: 2, name: "peter", age: 15},
    ]

    const conList = personList.map((person)=>(<h3>{person.age} {person.name}</h3>))
  return   <div>{conList}</div>
  
  
}

export default NameList