import React from 'react'
import Image from 'next/image'

export const Banner = ({img}) => {
  return (
    <Image src={img} alt="Banner img"
    style={{ width: "100%", objectFit: "cover", height: "auto"}} />
  )
}
