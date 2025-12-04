import React from 'react'
import { Link } from 'react-router'

const Error404 = () => {

  return (
    <div className='Error-container'>
      <h1>404 Error</h1>
      <Link to="/"><button onClick={redirectHome} >Home Page</button></Link>
    </div>
  )
}

export default Error404
