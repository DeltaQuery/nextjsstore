import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { TabsCombo } from './TabsCombo'
import DrawerProduct from './DrawerProduct'
import { Divider } from '@mui/material'
import { ResultCombo } from './ResultCombo'

export default function AppCombo({ categories, products }) {
  const [tabValue, setTabValue] = useState(0)
  const [chosenProduct, setChosenProduct] = useState()
  const [drawerType, setDrawerType] = useState()

  const [drawer, setDrawer] = useState({
    bottom: false,
    left: false
  })

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    if (window.innerWidth > 600) {
      setDrawer({ ...drawer, left: open })
    } else {
      setDrawer({ ...drawer, bottom: open })
    }
  }

  if (!categories || !products) return <div>No hay elementos.</div>

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', margin: "auto", maxWidth: "760px" }}>
        <ResultCombo
          setChosenProduct={setChosenProduct}
          drawer={drawer}
          setDrawer={setDrawer}
          drawerType={drawerType}
          setDrawerType={setDrawerType}
        />
        <Divider sx={{ mt: 1, mb: 1 }} />
        <TabsCombo
          chosenProduct={chosenProduct}
          setChosenProduct={setChosenProduct}
          drawer={drawer}
          setDrawer={setDrawer}
          categories={categories}
          products={products}
          tabValue={tabValue}
          setTabValue={setTabValue}
          setDrawerType={setDrawerType} />
      </Box>
      <DrawerProduct
        product={chosenProduct}
        state={drawer}
        setDrawer={setDrawer}
        toggleDrawer={toggleDrawer}
        categories={categories}
        drawerType={drawerType} />
    </Box>
  )
}

