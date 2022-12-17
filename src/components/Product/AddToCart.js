import React from 'react'
import { ShopButton } from 'styles/Product/Components/ShopButton'

export const AddToCart = ({display, text ="Agregar al Carrito", redirectFunction = emptyFunc}) => {
  const emptyFunc = () => {

  }
  
  if(display && display.includes("combo_list")) return <></>

  return (
    <ShopButton onClick={redirectFunction} className={display}>{text}</ShopButton>
  )
}
