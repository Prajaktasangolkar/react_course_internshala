import React from 'react'

function Tests(prop) {
    const sendMessage=()=>{
        alert("hello!")
    }
  return (
   <>
   <div>
    <h1>Hello{prop.name}! </h1>
    <button onClick={sendMessage}>Send Message!</button>
   </div>
   </>
  )
}

export default Tests