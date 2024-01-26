import React, { useState } from 'react'

function New(prop) {
    const sendMessage=()=>{
        setGreeting('Goodbyess')
    }
    const handleClick=(event)=>{
        event.preventDefault()
        alert(name)
    }
    const keyDownHandler=(event)=>{
        if (event.code=='Enter'){
            handleClick(event)  //after clicking enetr key it will enter the text
        }
    }
    const [greeting,setGreeting]=useState("hello")
    const [name,setName]=useState('')
  
  return (
  
        <>
      <h1>{greeting}{prop.name}</h1>
        <button onClick={sendMessage}>Send message</button>  

        <form onSubmit={handleClick}>
            <label htmlFor="name" >Name:
            <br />
            <input type="text" placeholder='name' value={name}
             onChange={(e)=>setName(e.target.value)}  
             onKeyDown={keyDownHandler}
             required/>
            </label>
            <input type="submit" value="Submit" />

        </form>
        </>
  )
}

export default New

