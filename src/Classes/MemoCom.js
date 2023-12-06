import React from 'react'

const MemoCom = ({name}) => {
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoCom)