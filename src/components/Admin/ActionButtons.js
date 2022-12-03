import React from 'react'
import { IconButton } from '@mui/material'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { getProducts, removeProduct } from 'services/productService'
import { useDispatch } from 'react-redux'
import { setProducts } from 'slices/dataSlice'
import { useRouter } from 'next/router'

export const ActionButtons = ({product}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const deleteFieldData = async id => {
    await removeProduct(id)
    const products = await getProducts()
    dispatch(setProducts(products))
  }

  const updateFieldData = id => {
    router.push(`/admin/update-product/${id}`)
  }


  return (
    <>
      <IconButton onClick={() => updateFieldData(product.id)} aria-label="delete" disabled={false} color="primary">
        <AiOutlineEdit size={22}/>
      </IconButton>
      <IconButton onClick={() => deleteFieldData(product.id)} aria-label="delete" disabled={false} sx={{ color: 'red' }}>
        <AiOutlineDelete size={22}/>
      </IconButton>
    </>
  )
}
