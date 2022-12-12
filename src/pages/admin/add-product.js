import React, { useEffect, useState } from 'react'
import { Main } from 'styles/View/ViewStyles'
import { useAuth } from 'hooks/useAuth'
import { AdLayout } from 'layout/Layout/AdLayout'
import { getProducts } from 'services/productService'
import { ProductForm } from 'components/Admin/ProductForm'

const AddProduct = () => {
    const [products, setProducts] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const { auth } = useAuth()

    useEffect(() => {
        (async function () {
            const productsArr = await getProducts()
            if (productsArr) {
                setProducts(productsArr)
                setLoading(false)
            } else {
                setLoading(false)
                setError(true)
            }
        })()
    }, [])

    if (!auth || loading) {
        return <Main>Loading...</Main>
    }

    if (error) {
        return <Main>An error ocurred trying to load this page. Please try reloading.</Main>
    }

    return (
        <Main>
            <ProductForm products={products}/>
        </Main>
    )
}

export default AddProduct

AddProduct.getLayout = function getLayout(page) {
    return (
        <AdLayout>
            {page}
        </AdLayout>
    )
}