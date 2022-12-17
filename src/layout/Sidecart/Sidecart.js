import React, { useEffect } from 'react'
import { useSwiper } from 'hooks/useSwiper'
import { SidecartDiv } from 'styles/Sidecart/Sidecart'
import { useSelector } from 'react-redux'
import { Product } from 'components/Product/Product'
import { Section } from 'components/Section/Section'
import { AddToCart } from 'components/Product/AddToCart'
import { Remove } from 'components/Product/Remove'
import { useRouter } from 'next/router'

const Cart = () => {
    return <div style={{color: "#003A4E", fontWeight: "700", marginTop: "1rem"}}>Tu producto se agregó al carrito 💙</div>
}

const Right = () => {
    const { handleSidecart } = useSwiper()

    return <Remove setOpen={handleSidecart}/>
}

export const Sidecart = () => {
    const router = useRouter
    const { sidecart, handleSidecart } = useSwiper()
    const addedProduct = useSelector(state => state.data.addedProduct)

    const handlePosition = () => {
        const position = sidecart ? "0px" : "-2000px"
        return position
    }

    const goToCart = () => {
        router.push("/cart")
    }

    return (
        <SidecartDiv
            /*onTouchStart={(e) => setStart([e.targetTouches[0].clientX, e.targetTouches[0].clientY])}
            onTouchMove={(e) => setEnd([e.changedTouches[0].clientX, e.targetTouches[0].clientY])}
            onTouchEnd={checkSwipeToClose}*/
            position={handlePosition}
        >
            <div className="SidecartContent">
                <Section
                 Left={Cart}
                 Right={Right}>
                <div style={{height:"1rem"}}></div>
                <Product display="sidebar" product={addedProduct} />
                <div style={{height:"2rem"}}></div>
                <AddToCart
                text="Ir al Carrito"
                redirectFunction={goToCart}
                />
                <span
                onClick={() => handleSidecart(false)}
                style={{
                    display: "block",
                    paddingTop:"2rem",
                    textAlign: "center",
                    fontWeight:"700", 
                    cursor: "pointer",
                    color: "#3E70AC"
                    }}
                >Seguir comprando
                </span>
                </Section>
            </div>
        </SidecartDiv>
    )
}
