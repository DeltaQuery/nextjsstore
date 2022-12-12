import React, { useEffect, useState } from 'react'
import { Main } from 'styles/View/ViewStyles'
import { useAuth } from 'hooks/useAuth'
import { AdLayout } from 'layout/Layout/AdLayout'
import { getProducts } from 'services/productService'
import { useRouter } from 'next/router'
import { ProductForm } from 'components/Admin/ProductForm'

const UpdateProduct = () => {
    const [products, setProducts] = useState()
    const [product, setProduct] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const { auth } = useAuth()
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        (async function () {
            const productsArr = await getProducts()
            if (productsArr) {
                setProducts(productsArr)
            } else {
                setError(true)
            }
        })()
    }, [])

    useEffect(() => {
        if (products && products.length > 0) {
            (function () {
                const product = products[products.findIndex(product => product._id === id)]
                if (product) {
                    setProduct(product)
                } else {
                    setError(true)
                }
            })()
        } else {
        }
        setLoading(false)
    }, [products])

    if (!auth || loading) {
        return <Main>Loading...</Main>
    }

    if (error) {
        return <Main>An error ocurred trying to load this page. Please try reloading.</Main>
    }

    if (product) {
        return (
            <Main>
                <ProductForm products={products} newProductForm={false} product={product} />
            </Main>
        )
    }
}

export default UpdateProduct

UpdateProduct.getLayout = function getLayout(page) {
    return (
        <AdLayout>
            {page}
        </AdLayout>
    )
}