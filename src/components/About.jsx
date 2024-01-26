import React, { useState } from 'react'

function About() {
    const handlesubmit=(e)=>{
        e.preventDefault();
        alert('hiii')
    }
    const [message,setMessage]=useState('')
  return (
    <>
    <form onSubmit={handlesubmit}>
        <label htmlFor="" >Enter ur message:
        <input value={message}
         type="text" name="" id="" placeholder='message' 
         onChange={(e)=>setMessage(e.target.value)}
        />
        </label>
        <br />
        <br />
        <label htmlFor="">Your message is:</label>
        <h1>{message}</h1>
        <button type="submit" value="submit" >Submit</button>
    </form>
    </>
  )
}

export default About