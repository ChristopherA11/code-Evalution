import React from 'react'
import Child from './Child'

function NameList() {
    const personList = [
        {id: 0, name: "john", age: 22},
        {id: 1, name: "kumar", age: 25},
        {id: 2, name: "peter", age: 15},
    ]

    const conList = personList.map(person=> <Child key= {person.id}person={person }/>)
  return   <div>{conList}</div>
        
  
  
}

export default NameList