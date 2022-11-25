import React from 'react'
import { Layout } from 'layout/Layout/Layout'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Products = () => {
  const bg = useSelector(state => state.ui.bg)

  return (
    <main className="Main" style={{ backgroundColor: bg }}>
        <Link href="/">Main</Link>
        <div>Mis productos!</div>
    </main>
  )
}

export default Products

Products.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}