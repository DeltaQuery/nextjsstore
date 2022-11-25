import React from 'react'
import Link from 'next/link'
import { BiCart } from 'react-icons/bi'
import styles from "styles/Header.module.css"
import { useSelector } from 'react-redux'

export const CartIcon = () => {
    const cart = useSelector(state => state.data.cart)
    return (
        <Link href="/cart" style={{ marginRight: "3%", position: "relative" }}>
            <div className={styles.RightNav}>
                <BiCart
                    size="38"
                    fill="white"
                />
                {cart.length > 0
                    ?
                    <div className={styles.CartQuantity}>{cart.length}</div>
                    :
                    null}
                <span className={styles.NavText}>Carrito</span>
            </div>
        </Link>
    )
}
