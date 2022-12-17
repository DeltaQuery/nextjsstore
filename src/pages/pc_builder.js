import { useEffect, useState } from 'react'
import { Layout } from 'layout/Layout/Layout'
import { Main } from 'styles/View/ViewStyles'
import { API } from 'services/API'
import { categoriesArr } from 'database/categoriesArr'
import AppCombo from 'components/Admin/Combo/AppCombo'

export async function getStaticProps() {
  const res = await fetch(`${API}/products`)
  const data = await res.json()
  return {
    props: { data },
  }
}

export default function PcBuilder({ data }) {
    const [products, setProducts] = useState()
    const [categories, setCategories] = useState()

    useEffect(() => {
       const filteredCategories = categoriesArr.filter(cat => cat.combo === true)
       const filteredProducts = data.filter(product => product.combo_item === true)
        setCategories(filteredCategories)
        setProducts(filteredProducts)
    },[data])
  
  return (
      <Main>

      <AppCombo categories={categories} products={products}/>

      </Main>
  )
}

PcBuilder.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}