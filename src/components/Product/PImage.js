import React from 'react'
import Link from 'next/link'
import { ProductImg } from 'styles/Product/Components/PImageStyles'

export const PImage = ({ images, id, display }) => {

  return (
    <ProductImg className={display}>
      {images[0]?.smallImg && <>
        {display === "group" ?
          <Link href={`/details/${id}`} className="ImgContainer">
            <img src={images[0]?.smallImg} width="90%" className="ProductImg" alt={id} />
          </Link>
          :
          <img className="ProductImg" src={images[0]?.smallImg} width="90%" />
        }
      </>
      }
    </ProductImg>

  )
}