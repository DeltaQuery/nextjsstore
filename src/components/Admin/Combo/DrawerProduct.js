import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Divider } from '@mui/material'
import { ComboProduct } from 'styles/Combo/ComboStyles'
import { PTitle } from 'components/Product/PTitle'
import { PPrice } from 'components/Product/PPrice'
import { BiX } from 'react-icons/bi'
import { AddToCart } from 'components/Product/AddToCart'
import { useSelector, useDispatch } from 'react-redux'
import { setCombo } from 'slices/dataSlice'

export default function DrawerProduct({ product, state, setDrawer, toggleDrawer, drawerType = "add" }) {
  const components = useSelector(state => state.data.combo)
  const dispatch = useDispatch()
  const [productData, setProductData] = useState()

  const getProductData = () => {
    const productKey = Object.keys(product.combo_data)
    const productKeys = Object.entries(product.combo_data[productKey])

    const newProductKeys = productKeys.map(key => {
      return [ key[0] = key[0].charAt(0).toUpperCase() + key[0].slice(1),
      key[1] = key[1] ]
    })
    setProductData(newProductKeys)
  }

  const addToCombo = (product) => {
    if (product.category.includes(5)) {
      dispatch(setCombo({ ...components, processor: product}))
    }
    if (product.category.includes(6)) {
      dispatch(setCombo({ ...components, mobo: product}))
    }
    if (product.category.includes(7)) {
      dispatch(setCombo({ ...components, ram: product}))
    }
    if (product.category.includes(4) || product.category.includes(8)) {
      dispatch(setCombo({ ...components, storage: product}))
    }
    if (product.category.includes(13)) {
      dispatch(setCombo({ ...components, gamingCase: product}))
    }
    if (product.category.includes(12)) {
      dispatch(setCombo({ ...components, cooler: product}))
    }
    if (product.category.includes(14)) {
      dispatch(setCombo({ ...components, graphic: product}))
    }
    if (product.category.includes(3)) {
      dispatch(setCombo({ ...components, power: product}))
    }
    if (window.innerWidth > 600) {
      setDrawer({ ...state, left: false })
    } else {
      setDrawer({ ...state, bottom: false })
    }
  }

  const removeFromCombo = (product) => {
    if (product.category.includes(5)) {
      dispatch(setCombo({ ...components, processor: undefined}))
    }
    if (product.category.includes(6)) {
      dispatch(setCombo({ ...components, mobo: undefined}))
    }
    if (product.category.includes(7)) {
      dispatch(setCombo({ ...components, ram: undefined}))
    }
    if (product.category.includes(4) || product.category.includes(8)) {
      dispatch(setCombo({ ...components, storage: undefined}))
    }
    if (product.category.includes(13)) {
      dispatch(setCombo({ ...components, gamingCase: undefined}))
    }
    if (product.category.includes(12)) {
      dispatch(setCombo({ ...components, cooler: undefined}))
    }
    if (product.category.includes(14)) {
      dispatch(setCombo({ ...components, graphic: undefined}))
    }
    if (product.category.includes(3)) {
      dispatch(setCombo({ ...components, power: undefined}))
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
          <div className="ComboButtonContainer">
            <AddToCart display="detailed"
          text={drawerType === "add" ? "Agregar a Combo" : "Remover de Combo"}
          redirectFunction={() => drawerType === "add" ? addToCombo(product) : removeFromCombo(product)} />
          </div>
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