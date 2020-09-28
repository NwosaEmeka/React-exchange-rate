import React from 'react'
import './fetch.css'
function Error({message}) {
  return (
    <div className ="error__msg">
      <h1>{message}</h1>
    </div>
  )
}

export default Error
