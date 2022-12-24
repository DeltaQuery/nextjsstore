import React from 'react'
import { TbListDetails } from "react-icons/tb"
import { BiCartAlt } from "react-icons/bi"
import { IconComboDiv } from 'styles/Combo/ComboStyles'
import { BiImage } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, setCart } from 'slices/dataSlice'
import { useRouter } from 'next/router'

export const IconCombo = ({ type = "Cart", resultView, setResultView }) => {
    const components = useSelector(state => state.data.combo)
    const cart = useSelector(state => state.data.cart)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleView = () => {
        setResultView(!resultView)
    }

    const goToCart = () => {
        dispatch(setCart([]))
        Object.entries(components).filter(comp => comp[1] !== undefined).map(comp => {
            dispatch(addToCart([comp[1], 1]))
        })
        router.push("/cart")
    }

    if (type === "Cart") {
        return (
            <IconComboDiv className="CartIcon" onClick={goToCart}>
                <BiCartAlt className="my-float" size={24} />
                {Object.entries(components).filter(comp => comp[1] !== undefined).length > 0
                    ?
                    <div className="CartQuantity">{Object.entries(components).filter(comp => comp[1] !== undefined).length}</div>
                    :
                    null}
            </IconComboDiv>
        )
    }

    if (type === "Details") {
        return (
            <IconComboDiv className="DetailsIcon" onClick={handleView}>
                {
                    resultView
                        ?
                        <TbListDetails className="my-float" size={24} />
                        :
                        <BiImage className="my-float" size={24} />
                }
            </IconComboDiv>
        )
    }
}