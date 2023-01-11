import React from 'react'
import "./Shop.css"
import { PRODUCTS } from '../../Products'
import { Product } from './Product'

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>E-commerce example</h1>
      </div>
      <div className="products" style={{color: "black"}}>
        {PRODUCTS.map((product, index) => {
          return <Product key={index} data={product} index={index}/>
        })}
      </div>
    </div>
  )
}

