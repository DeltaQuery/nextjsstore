import React from 'react'
import { useSelector } from 'react-redux'
import roundNumber from 'utils/roundNumber'

export const CartTotal = () => {
    const total = useSelector(state => state.data.total)

  return (
    <div className="CartTotal">Total: ${roundNumber(total[0])}</div>
  )
}
