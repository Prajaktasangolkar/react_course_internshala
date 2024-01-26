import React,{Fragment,useState} from 'react'

function State() {
    const [product,setProduct]=useState("Desktop")

  return (
    <>

    <Fragment>
      <h1>Products</h1>
      <br />
      <p>U want to purchase a.{product}</p>
      <button type='button' onClick={()=>setProduct('Laptop')}>Laptop</button>
      <button type='button' onClick={()=>setProduct('Keyboard')}>Keyboard</button>
      <button type='button' onClick={()=>setProduct('Desktop')}>Desktop</button>
    </Fragment>


    </>
  )
}

export default State