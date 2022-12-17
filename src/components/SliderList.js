import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import { SearchedProducts } from 'styles/Search/SearchStyles'
//import { useProducts } from '../../services/useProducts'
//import { productArr } from 'database/productArr'
import { Product } from './Product/Product'

export const SliderList = ({ combo, slides = 4, category, data: productArr, slidesSetting = {
    slidesToShow: slides - 1,
    slidesToScroll: slides - 1
} }) => {
    //const { loading, data } = useProducts()
    const loading = false

    const settings = {
        dots: false,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: slides,
        slidesToScroll: slides,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 900,
                settings: slidesSetting
            },
            {
                breakpoint: 650,
                settings: "unslick"
            }
        ]
    }

    const [products, setProducts] = useState()

    useEffect(() => {
        if (/*!loading && data*/ productArr) {
            if (!category) {
                setProducts(productArr)
            } else {
                if (category === 50 || category[0] === 50) {
                    setProducts(productArr.filter(x => x.discountedPrice))
                } else {
                    if (typeof category === "number") {
                        let cat = []
                        cat.push(category)
                        setProducts(productArr.filter(x => x.category.some(e => e === cat)))
                        setProducts(productArr.filter(x => x.category.some(z => cat.includes(z))))
                    } else {
                        setProducts(productArr.filter(x => x.category.some(e => e === category)))
                        setProducts(productArr.filter(x => x.category.some(z => category.includes(z))))
                    }
                }
            }
        }
    }, [/*loading*/])

    return (
        <>
            {loading &&
                <Slider {...settings} id="productSlider">
                    <Product loading={loading} display="group" />
                    <Product loading={loading} display="group" />
                    <Product loading={loading} display="group" />
                    <Product loading={loading} display="group" />
                </Slider>
            }

            {
                (!loading && products?.length >= slides) &&
                <Slider {...settings} id="productSlider">
                    {products && products.map((product, index) => {
                        return <Product loading={loading} key={index} display={`group ${combo}`} product={product} />
                    })
                    }
                </Slider>
            } 

            {(!loading && products?.length < slides) &&
                <SearchedProducts style={{ marginTop: "5px" }}>
                    {products && products.map((product, index) => {
                        return <Product loading={loading} key={index} product={product} display={`group ${combo}`} />
                    })
                    }
                </SearchedProducts>
            }
        </>
    )
}
