import React from 'react'
import { SelectQuantity, AlterQuantity } from 'styles/Product/Components/SelectStyles'
import { useDispatch } from 'react-redux'
import { setQuantity, updateProductQuantity } from 'slices/dataSlice'

const quantity = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ]

export const PQuantity = ({ display, product}) => {

    const dispatch = useDispatch()

    const setNumber = (number) => {
        dispatch(setQuantity(number))
    }

    const handleQuantity = (product, symbol) => {
       dispatch(updateProductQuantity([product, symbol]))
    }

    return (
        <>
            {display === "cart" && product
                ?
                <AlterQuantity
                    className={display}>
                    <button
                        disabled={product.quantity == 1}
                        onClick={() => handleQuantity(product, "-")}
                        className="AlterQuantityButton"
                    >-</button>

                    <input type="text" className="AlterQuantityInput" readOnly value={product.quantity}></input>

                    <button
                        disabled={product.quantity == 8}
                        onClick={() => handleQuantity(product, "+")}
                        className="AlterQuantityButton"
                    >+</button>
                </AlterQuantity>
                :
                <SelectQuantity
                    className={display}
                    onChange={(e) => setNumber(e.target.value)}>
                    {quantity.map((quantity) => {
                        return (
                            <option value={quantity} key={quantity}>
                                {quantity}
                            </option>
                        )
                    })}
                </SelectQuantity>
                }
        </>
    )
}
