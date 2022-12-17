import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { Product } from 'components/Product/Product'
import styles from "styles/Combo/Tabs.module.css"
import { ComboProducts } from 'styles/Combo/ComboStyles'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export const TabsCombo = ({ categories, products, tabValue, setTabValue, setChosenProduct, setDrawer, drawer }) => {
    const openDrawer = (product) => {
        setChosenProduct(product)
        if (window.innerWidth > 600) {
            setDrawer({ ...drawer, left: true })
          } else {
            setDrawer({ ...drawer, bottom: true })
          }
    }

    const handleChange = (event, newValue) => {
        setTabValue(newValue)
    }

    if(categories && products){
      return (
        <>
            <Tabs
                value={tabValue}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example">
                {categories.map((category, index) => (
                    <Tab sx={{ width: "88px", marginLeft: "0px", fontSize: 10 }}
                        icon={<Image height={34} width={34} alt={category.category} src={category.image.src} />}
                        label={category.category}
                        key={category.categoryId}
                        {...a11yProps(index)}
                        />
                ))}
            </Tabs>

            {categories.map((category, index) => (
                <TabPanel className={styles.TabProducts} index={index} value={tabValue} key={index}>
                    <ComboProducts>
                        {products.filter(product => product.category.includes(categories[index].categoryId)).map((product, index) => {
                            return <div onClick={() => openDrawer(product)} key={index} style={{ cursor: "pointer" }}><Product
                                key={index}
                                product={product}
                                display="group combo_list"
                            /></div>
                        })}
                    </ComboProducts>
                </TabPanel>
            ))}
        </>
    )  
    } else {
        return <div></div>
    }
}

