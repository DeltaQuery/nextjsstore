import React from 'react'
import Link from 'next/link'
import { ProductImg } from 'styles/Product/Components/PImageStyles'

export const PImage = ({image, id, display}) => {

  return (
    <ProductImg className={display}>
    { display === "group" ?
    <Link href={`/details/${id}`} className="ImgContainer">
    <img src={image[0]?.smallImg[0]} width="90%" className="ProductImg" alt={id}/>
    </Link>
    :
    <img className="ProductImg" src={image[0]?.smallImg[0]} width="90%"/>
    }
    </ProductImg>
    
  )
}