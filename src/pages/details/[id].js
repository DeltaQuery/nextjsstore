import React, { useState, useEffect } from 'react'
import { Main } from 'styles/View/ViewStyles'
import { useRouter } from 'next/router'
import { Product } from 'components/Product/Product'
import { Section } from 'components/Section/Section'
import { SectionBack } from 'components/Section/SectionBack'
import { Categories } from 'components/Categories'
import { Share } from 'components/Section/Share'
import { Instagram } from 'components/Instagram'
import { SectionTitle } from 'components/Section/SectionTitle'
import { SliderList } from 'components/SliderList'
import { productArr } from 'database/productArr'
import { Layout } from 'layout/Layout/Layout'
//import { useLocation } from 'react-router-dom'
//import { useFindProduct } from '../services/useFindProduct'
//import { useProducts } from '../services/useProducts'

const Details = () => {
  const router = useRouter()
  const { id } = router.query
  //const { loading, data } = useFindProduct(id)
  //const { loading: pLoading, data: pData } = useProducts()
  const [product, setProduct] = useState()
  const [products, setProducts] = useState()
  const loading = false
  //const location = useLocation()

  useEffect(() => {
    const index = productArr.findIndex(product => product._id === id)
    /*if(!loading && !pLoading && data && pData){
      setProduct(data.findProduct)
      setProducts(pData.allProducts)
    }*/
    setProduct(productArr[index])
    setProducts(productArr)
  }, [/*location.key, loading, pLoading*/id])

  return (
    <Main>
      {
        (/*loading || pLoading*/ loading) &&
        <Section Left={SectionBack} Right={Share}>
              <Product display="detailed" loading={loading} />
            </Section>
      }

      {
        (/*!loading && !pLoading &&*/ product && products) &&
          <>
            <Section Left={SectionBack} Right={Share}>
              <Product display="detailed" product={product} products={products}/>
            </Section>
            
            <Section
              text="Productos relacionados 🌟"
              category={product.category[0]}
            >
              <SliderList
                category={product.category[0]}
              >
              </SliderList>
            </Section>
          </>
      }

      {
        (/*!loading && !pLoading &&*/ !product && !products) &&
        <div>Ningún producto coincide con tu búsqueda.</div>
      }

      <Section
        Left={SectionTitle}
        text="Categorías">
        <Categories />
      </Section>

      <Section
        Left={SectionTitle}
        text="¡Síguenos en Instagram!">
        <Instagram />
      </Section>
    </Main>
  )
}

export default Details

Details.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }