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
import { Layout } from 'layout/Layout/Layout'
import { API } from 'services/API'

export async function getStaticPaths() {
  try {
    const res = await fetch(`${API}/products`)
    const data = await res.json()
    const paths = data.map(({ _id }) => ({params: {id: `${_id}`}}))
    return {
      paths,
      fallback: false
    }
  } catch(err){
    console.log(err)
  }
}

export async function getStaticProps({params}) {
  const res_products = await fetch(`${API}/products`)
  const res_product = await fetch(`${API}/products/${params.id}`)
  const data_products = await res_products.json()
  const data_product = await res_product.json()
  return {
    props: { data_products, data_product },
  }
}

const Details = ({ data_products, data_product }) => {

  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState()
  const [products, setProducts] = useState()
  const loading = false
  //const location = useLocation()

  useEffect(() => {
    //const index = productArr.findIndex(product => product._id === id)
    /*if(!loading && !pLoading && data && pData){
      setProduct(data.findProduct)
      setProducts(pData.allProducts)
    }*/
    setProducts(data_products)
    setProduct(data_product)
    //setProduct(productArr[index])
    //setProducts(productArr)
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
                data={products}
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