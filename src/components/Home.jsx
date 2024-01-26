import React, { useEffect, useMemo, useState } from 'react'

function Home() {
  const expensiveCalc=(num)=>{
    for(let i=0;i<1000000;i++){
      num+=1;
    }
    return num;
  }
const [name,setName]=useState("")
const [count,setCount]=useState(0)
const calculation=useMemo(()=>expensiveCalc(count),[count])

const handleClick=(event)=>{
  event.preventDefault()
  alert(name)
}
const keyDownHandler=(event)=>{
  if (event.code=='Enter'){
      handleClick(event)  //after clicking enetr key it will enter the text
  }
}

// useEffect(()=>{  //it will increase count by +1 
//   setTimeout(() => {
//     setCount((count)=>count+1)
//   }, 1000);
  
// })

useEffect(() => {
  const timerId = setTimeout(() => {
    // Increment count and reset to 0 when it reaches 30
    setCount((prevCount) => (prevCount < 30 ? prevCount + 1 : 0));
  }, 1000);

  // Cleanup function
  return () => clearTimeout(timerId);
}, [count]);
return (
<>

<form onSubmit={handleClick}>
  {/* for calculation function use this */}
  {/* <h1>{calculation}</h1> */} 

  <h2>{count}</h2>
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

export default Home