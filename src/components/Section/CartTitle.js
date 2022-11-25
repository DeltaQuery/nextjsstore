import React from 'react'
import { BiChevronLeft } from "react-icons/bi"
import { useRouter } from 'next/router'

export const CartTitle = ({ text = "Tu Carrito" }) => {
    const router = useRouter()

    const goBack = () => {
        router.back()
    }

    return (
        <div onClick={goBack} className="CartTitle">
                <BiChevronLeft
                    color="#3E70AC"
                    size="22"
                    className="CartBack"
                />
            <span>{text}</span>
        </div>
    )
}
