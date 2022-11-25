import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BiChevronLeft } from "react-icons/bi"

export const SectionBack = ({text = "Regresar"}) => {
  const router = useRouter()
  
  return (
    <div onClick={() => router.back()} className="MoreLink">
      <BiChevronLeft
        color="#3E70AC"
        size="22"
      />
      <span>{text}</span>
    </div>
  )
}
