import React from 'react'
import { Product } from './Product/Product'
import { useSelector } from 'react-redux'

export const CartProducts = ({ children }) => {
  const products = useSelector(state => state.data.cart)
  
  return (
    <div className="CartProducts">
      {children}
      {(products && products.length > 0) &&
        products.map((product, index) => {
          return <Product key={index} display="cart" product={product} />
        })

      }
    </div>
  )
}
