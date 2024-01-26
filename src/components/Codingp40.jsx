import React, { useEffect, useState } from 'react'

function Codingp40() {
    const [title,setTitle]=useState('Page Title')
    useEffect(()=>{
        alert('Page loaded')
    },[])
    const toggleTitle = () => {
        if(title === 'Page Title') setTitle('Page Title 1')
        else setTitle('Page Title');
        }
        return (
       <div className="App">
       <h1>{title}</h1>
       <br/><br/>
       <button type="button" className="btn btn-primary" onClick={toggleTitle}>Toggle
       Title</button>
       </div>
        )
       
}

export default Codingp40