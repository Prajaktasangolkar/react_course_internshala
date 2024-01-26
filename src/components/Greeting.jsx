import React from 'react'

export function HelloGreeting(){
    return <h1>Hello</h1>
}


export function GoodbyeGreeting(){
    return <h1>Goodbye</h1>
}


function Greeting(props) {
  if (props.hello){
    // <Greeting hello={true}/> ---> in App.js
    return <HelloGreeting/>
  }
  else{
    return <GoodbyeGreeting/>
  }
}

export default Greeting