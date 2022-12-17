import React from 'react'
import { PriceDiv } from 'styles/Product/Components/PPriceStyles'
import roundNumber from 'utils/roundNumber'

export const PPrice = ({ display, price, discountedPrice, quantity }) => {
  return (
    <PriceDiv className={display} discountedPrice={discountedPrice}>
      {
        discountedPrice &&
        <div className="dealPrice">
          <span>-25%</span>
          {display.includes("cart")
            ?
            <span>${roundNumber(discountedPrice*quantity)}</span>
            :
            <span>${roundNumber(discountedPrice)}</span>
          }
        </div>
      }

      <div className="regularPrice">
        {
          discountedPrice &&
          <span>Precio regular:</span>
        }
        {display.includes("cart")
            ?
            <div>${roundNumber(price*quantity)}</div>
            :
            <div>${roundNumber(price)}</div>
          }
      </div>
    </PriceDiv>
  )
}
