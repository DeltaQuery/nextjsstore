import React from 'react'
import { BiX } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { removeFromCart } from 'slices/dataSlice'

export const Remove = ({id, setOpen}) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        if(id){
            dispatch(removeFromCart(id))
        } else if(setOpen) {
            setOpen(false)
        }
    }

    return (
        <BiX
            onClick={handleRemove}
            size="46"
            fill="#A8A8A8"
            className="RemoveIcon" />
    )
}
