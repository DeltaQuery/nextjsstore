import React from 'react'
import { ShopButton } from 'styles/Product/Components/ShopButton'

const emptyFunc = () => {

}

export const AddToCart = ({display, text ="Agregar al Carrito", redirectFunction = emptyFunc}) => {

  return (
    <ShopButton onClick={redirectFunction} className={display}>{text}</ShopButton>
  )
}
