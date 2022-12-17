import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Divider } from '@mui/material'
import { ComboProduct } from 'styles/Combo/ComboStyles'
import { PTitle } from 'components/Product/PTitle'
import { PPrice } from 'components/Product/PPrice'
import { Features } from 'components/Product/Features'
import { BiX } from 'react-icons/bi'
import { AddToCart } from 'components/Product/AddToCart'

export default function DrawerProduct({ product, state, drawer, setDrawer, toggleDrawer, components, setComponents }) {

  const [productData, setProductData] = useState()

  const getProductData = () => {
    const productKey = Object.keys(product.combo_data)
    const productKeys = Object.entries(product.combo_data[productKey])
    setProductData(productKeys)
  }

  const addToCombo = (product) => {
    if (product.category.includes(5)) {
      setComponents({ ...components, processor: product})
    }
    if (product.category.includes(6)) {
      setComponents({ ...components, mobo: product})
    }
    if (product.category.includes(7)) {
      setComponents({ ...components, ram: product})
    }
    if (product.category.includes(4) || product.category.includes(8)) {
      setComponents({ ...components, storage: product})
    }
    if (product.category.includes(13)) {
      setComponents({ ...components, gamingCase: product})
    }
    if (product.category.includes(12)) {
      setComponents({ ...components, cooler: product})
    }
    if (product.category.includes(14)) {
      setComponents({ ...components, graphic: product})
    }
    if (product.category.includes(3)) {
      setComponents({ ...components, power: product})
    }
    if (window.innerWidth > 600) {
      setDrawer({ ...state, left: false })
    } else {
      setDrawer({ ...state, bottom: false })
    }
  }

    useEffect(() => {
      if (product) getProductData()
    }, [product])

    const List = () => (
      <Box
        sx={{ width: innerWidth > 600 ? 360 : "100vw", height: "90vh", overflow: "auto" }}
        role="presentation"
      >
        <ComboProduct>
          <BiX
            className="CloseDrawerIcon"
            size="46"
            fill="#A8A8A8"
            onClick={toggleDrawer(false)} />
          <img
            alt="Product Image"
            className="ProductImage"
            src={product.images[0].smallImg}
            style={{}} />
          <Divider />
          <PTitle display="detailed" name={product.name} id={product._id} />
          <PPrice display="detailed" price={product.price} discountedPrice={product.discountedPrice} quantity={1} />
          <Divider />
          <h4>Datos técnicos:</h4>
          <ul className="ProductData">
            {productData && productData.map((data, index) => {
              return <li key={index}><span className="ProductData--key">• {data[0]}:</span> <span className="ProductData--value">{data[1]}.</span></li>
            })}
          </ul>
          <Divider />
          <AddToCart display="detailed" text="Agregar a Combo" redirectFunction={() => addToCombo(product)} />

        </ComboProduct>

      </Box>
    )

    return (
      <div>
        <SwipeableDrawer
          anchor={window.innerWidth > 600 ? "left" : "bottom"}
          open={state[window.innerWidth > 600 ? "left" : "bottom"]}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {product && <List />}
        </SwipeableDrawer>
      </div>
    )
  }