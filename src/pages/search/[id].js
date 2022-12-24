import React, { useState, useEffect } from 'react'
import { categoriesArr } from 'database/categoriesArr'
import { Section } from 'components/Section/Section'
import { SectionBack } from 'components/Section/SectionBack'
import { Product } from 'components/Product/Product'
import { SearchedProducts } from 'styles/Search/SearchStyles'
import { useRouter } from 'next/router'
import { Main } from 'styles/View/ViewStyles'
import { Layout } from 'layout/Layout/Layout'
import { API } from 'services/API'
import { SectionMore } from 'components/Section/SectionMore'
import { Whatsapp } from 'components/Whatsapp'

const Nothing = () => {
  return <span></span>
}
export async function getServerSideProps({ params }) {
  const res_products = await fetch(`${API}/products`)
  const data_products = await res_products.json()
  return {
    props: { data_products },
  }
}

const Search = ({ data_products }) => {
  //const { loading, data } = useProducts()

  const loading = false
  const router = useRouter()
  const { id } = router.query
  const [searchedProducts, setSearchedProducts] = useState()
  const [typeOfSearch, setTypeOfSearch] = useState([])

  useEffect(() => {
    if (router?.isReady) {
      const params = id.split("=")
      if (!loading && /*data*/ data_products) {
        if (params[0] === "category") {
          const category = categoriesArr.filter(x => x.categoryId === Number(params[1]))
          if (category.length === 0) {
            setTypeOfSearch([params[0], null, false])
            setSearchedProducts([])
          } else {
            if (params[1] === "50") {
              setTypeOfSearch([params[0], category[0].category, true])
              //setSearchedProducts(data.allProducts?.filter(x => x.discountedPrice))
              setSearchedProducts(data_products.filter(x => x.discountedPrice))
            } else {
              setTypeOfSearch([params[0], category[0].category, true])
              //setSearchedProducts(data.allProducts?.filter(x => x.category.some(g => params[1] == g)))
              setSearchedProducts(data_products.filter(x => x.category.some(g => params[1] == g)))
            }
          }
        } else if (params[0] === "value") {
          setTypeOfSearch([params[0], params[1], true])

          //setSearchedProducts(data.allProducts?.filter
          setSearchedProducts(data_products.filter
            (x =>
              x.name.toLowerCase().includes(params[1].toLowerCase())
              ||
              x.features?.some((item) => item.toLowerCase().includes(params[1].toLowerCase()))
            ))
        } else {
          setTypeOfSearch([false, false, false])
        }
      }
    }

  }, [id, loading])

  return (
    <Main>
      <Section
        Left={SectionBack}
        Right={searchedProducts?.length > 0 ? SectionMore : Nothing}
      >
        <div style={{ marginTop: "1rem" }}>
          {(typeOfSearch[2] === false) && <h4><span>Lo sentimos. La búsqueda que tratas de realizar </span> <span style={{ fontWeight: "700" }}>no es posible.</span></h4>}
          {(typeOfSearch[0] === "category" && searchedProducts.length > 0) && <h4><span>Resultados para:</span> <span style={{ fontWeight: "700" }}>"{typeOfSearch[1]}"</span></h4>}
          {(typeOfSearch[0] === "value" && searchedProducts.length > 0) && <h4><span>Resultados para:</span> <span style={{ fontWeight: "700" }}>"{typeOfSearch[1]}"</span></h4>}
          {(typeOfSearch[2] && searchedProducts.length < 1) && <h4><span>No hay resultados para:</span> <span style={{ fontWeight: "700" }}>"{typeOfSearch[1]}"</span></h4>}
        </div>

        {
          loading &&
          <SearchedProducts>
            <Product loading={loading} display="group" />
            <Product loading={loading} display="group" />
            <Product loading={loading} display="group" />
            <Product loading={loading} display="group" />
          </SearchedProducts>
        }

        {(!loading && searchedProducts) &&
          <SearchedProducts>
            {searchedProducts && searchedProducts.map((product, index) => {
              return <Product key={index} product={product} loading={loading} display="group" />
            })
            }
          </SearchedProducts>
        }
      </Section>

    </Main>
  )
}

export default Search

Search.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <Whatsapp/>
    </Layout>
  )
}