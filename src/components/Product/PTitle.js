import React from 'react'
import { TitleDiv } from 'styles/Product/Components/PTitleStyles'
import Link from 'next/link'

export const PTitle = ({display, name, id}) => {
  return (
    <>
    {
      (display.includes("detailed") || display.includes("combo_list"))
      ?
      <TitleDiv className={display}>{name}</TitleDiv>
      :
      <Link href={`/details/${id}`}>
        <TitleDiv className={display}>{name}</TitleDiv>
      </Link>
    }</>
    
  )
}
