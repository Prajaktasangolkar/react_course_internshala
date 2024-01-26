import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Product() {
    const products=['Laptop','Desktop','Keyboard']
  return (
    <Fragment>
        <h1>Products</h1>
        <ul>
            {products.map((product)=><li>{product}</li>)}
        </ul>
    </Fragment>
  )
}

export default Product