import React, { useEffect, useState } from 'react'
import { useSwiper } from 'hooks/useSwiper'
import { Separator } from 'styles/Separator'
import { ProductSkeleton } from './ProductSkeleton'
import { PTitle } from './PTitle'
import { PModels } from './PModels'
import { PImage } from './PImage'
import { PQuantity } from './PQuantity'
import { PPrice } from './PPrice'
import { Features } from './Features'
import { Remove } from './Remove'
import { AddToCart } from './AddToCart'
import { useDispatch } from 'react-redux'
import { addToCart, setAddedProduct } from 'slices/dataSlice'
import { ProductDiv } from 'styles/Product/ProductStyles'

export const Product = ({ display, product, loading, products }) => {
    const { handleSidecart } = useSwiper()
    const dispatch = useDispatch()

    const handleClick = () => {
        if (display === "group") {
            dispatch(addToCart([product, 1]))
            dispatch(setAddedProduct(product))
            handleSidecart(true)
        }
        if (display === "detailed") {
            dispatch(addToCart([product, undefined]))
            dispatch(setAddedProduct(product))
            handleSidecart(true)
        }
    }

    return (
        <>
            {
                loading &&
                <ProductSkeleton display={display} />
            }

            {(!loading && product) &&
                <>
                    <ProductDiv className={display}>
                        <div className="imgContainer">
                            <PImage display={display} images={product.images} id={product._id} />
                        </div>
                        <div>
                            <PTitle display={display} name={product.name} id={product._id} />
                            <PPrice display={display} price={product.price} discountedPrice={product.discountedPrice} quantity={product.quantity} />
                            <Separator className={display} />
                            <PModels display={display} product={product} products={products}/>
                            <Features display={display} features={product.features} />
                            <div className="Product--Buttons">
                                <PQuantity display={display} product={product} />
                                <AddToCart display={display} redirectFunction={handleClick} />
                            </div>
                        </div>
                        <Remove id={product._id} />
                    </ProductDiv>
                    {display === "cart" && <Separator />}
                </>
            }
        </>
    )
}
