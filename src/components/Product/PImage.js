import React from 'react'
import Link from 'next/link'
import { ProductImg } from 'styles/Product/Components/PImageStyles'

export const PImage = ({ images, id, display }) => {

  return (
    <ProductImg className={display}>
      {images[0]?.smallImg && <>
        {(display.includes("group") && !display.includes("combo_list")) ?
          <Link href={`/details/${id}`} className="ImgContainer">
            <img src={images[0]?.smallImg} width="90%" className="ProductImg" alt={id} />
          </Link>
          :
          <>
            {(display.includes("combo_list")) ?
            <div className="ImgContainer">
              <img className="ProductImg" src={images[0]?.smallImg} width="90%" />
            </div>
              :
              <img className="ProductImg" src={images[0]?.smallImg} width="90%" />
            }</>
        }
      </>
      }
    </ProductImg>

  )
}