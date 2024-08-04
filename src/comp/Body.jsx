import React from 'react'

function Body({val,handleChange}) {
  return (
    <div>
    <h1>{val}</h1>
    <div className='btn-cont'>
      <button onClick={()=>{handleChange("increment")}}>Increment</button>
      <button onClick={()=>{handleChange("decrement")}}>Decrement</button>
    </div>
    </div>
  )
}

export default Body
