import React from 'react'
import Link from 'next/link'

export const SectionMore = ({category}) => {
  return (
    <Link href={`/search/category=${category}`} className="MoreLink">
                    Ver más
                </Link>
  )
}
