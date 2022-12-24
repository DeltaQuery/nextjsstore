import React, { useState, useEffect } from 'react'
import { ComboResult } from 'styles/Combo/ComboStyles'
import { IconCombo } from './IconCombo'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useSelector } from 'react-redux'
import roundNumber from 'utils/roundNumber'
import caseShadow from "assets/shadows/case.png"
import coolerShadow from "assets/shadows/cooler.png"
import graphicShadow from "assets/shadows/graphic.png"
import moboShadow from "assets/shadows/mobo.png"
import powerShadow from "assets/shadows/power.png"
import processorShadow from "assets/shadows/processor.png"
import ramShadow from "assets/shadows/ram.png"
import storageShadow from "assets/shadows/ssd.png"
import Image from 'next/image'

export const ResultCombo = ({ setChosenProduct, setDrawer, drawer, setDrawerType }) => {
  const components = useSelector(state => state.data.combo)
  const [resultView, setResultView] = useState(true)
  const [totals, setTotals] = useState({ total: 0, subtotal: 0, savings: 0 })

  useEffect(() => {
    getTotal()
  }, [components])

  const openDrawer = (product) => {
    setChosenProduct(product)
    setDrawerType("remove")
    if (window.innerWidth > 600) {
      setDrawer({ ...drawer, left: true })
    } else {
      setDrawer({ ...drawer, bottom: true })
    }
  }

  const handleDrawer = e => {
    if (e.currentTarget.className.includes("Case")) {
      openDrawer(components.gamingCase)
    }

    if (e.currentTarget.className.includes("Ram")) {
      openDrawer(components.ram)
    }

    if (e.currentTarget.className.includes("Power")) {
      openDrawer(components.power)
    }

    if (e.currentTarget.className.includes("Storage")) {
      openDrawer(components.storage)
    }

    if (e.currentTarget.className.includes("Graphic")) {
      openDrawer(components.graphic)
    }

    if (e.currentTarget.className.includes("Mobo")) {
      openDrawer(components.mobo)
    }

    if (e.currentTarget.className.includes("Processor")) {
      openDrawer(components.processor)
    }

    if (e.currentTarget.className.includes("Cooler")) {
      openDrawer(components.cooler)
    }
  }

  const getTotal = () => {
    const initialValue = 0
    const subtotal = Object.entries(components).filter(comp => comp[1] !== undefined).reduce((accumulator, product) => accumulator + product[1].price, initialValue)
    const total = Object.entries(components).filter(comp => comp[1] !== undefined).reduce((accumulator, product) => product[1].discountedPrice === null || product[1].discountedPrice === undefined ? accumulator + product[1].price : accumulator + product[1].discountedPrice, initialValue)
    const savings = subtotal - total
    setTotals({
      total: roundNumber(total),
      subtotal: roundNumber(subtotal),
      savings: roundNumber(savings)
    })
  }

  return (
    <ComboResult>
      <div className="TotalContainer TotalContainer--Subtotal">Subtotal: ${totals.subtotal} </div>
      <div className="TotalContainer TotalContainer--Savings">Ahorro: ${totals.savings} </div>
      <div className="TotalContainer TotalContainer--Total">Total: ${totals.total} </div>
      <IconCombo type="Cart" />
      <IconCombo type="Details" resultView={resultView} setResultView={setResultView} />
      {resultView
        ?
        <div className="ComboResult--Container ComboResult--Container_View">

          {components?.gamingCase === undefined && <div className="CaseShadow">
            <Image src={caseShadow} style={{ height: "100%", width: "auto" }} alt="Sombra de producto" />
          </div>
          }
          {components?.graphic === undefined && <div className="GraphicShadow">
            <Image src={graphicShadow} style={{ height: "100%", width: "auto" }} alt="Sombra de producto" />
          </div>
          }
          {components?.mobo === undefined && <div className="MoboShadow">
            <Image src={moboShadow} style={{ height: "100%", width: "auto" }} alt="Sombra de producto" />
          </div>
          }
          {components?.power === undefined && <div className="PowerShadow">
            <Image src={powerShadow} style={{ height: "100%", width: "auto" }} alt="Sombra de producto" />
          </div>
          }
          {components?.ram === undefined && <div className="RamShadow">
            <Image src={ramShadow} style={{ height: "100%", width: "auto" }} alt="Sombra de producto" />
          </div>
          }
          {components?.storage === undefined && <div className="StorageShadow">
            <Image src={storageShadow} style={{ height: "100%", width: "auto" }} alt="Sombra de producto" />
          </div>
          }
          {components?.cooler === undefined && <div className="CoolerShadow">
            <Image src={coolerShadow} style={{ height: "100%", width: "auto" }} alt="Sombra de producto" />
          </div>
          }
          {components?.processor === undefined && <div className="ProcessorShadow">
            <Image src={processorShadow} style={{ height: "100%", width: "auto" }} alt="Sombra de producto" />
          </div>
          }

          {
            components?.gamingCase && <div className="Case" onClick={(e) => handleDrawer(e)}>
              {components?.gamingCase && <img src={components.gamingCase.images[0].smallImg} style={{ height: "100%", width: "auto" }} alt="Imagen de producto" />}
            </div>
          }
          {
            components?.graphic && <div className="Graphic" onClick={(e) => handleDrawer(e)}>
              {components?.graphic && <img src={components.graphic.images[0].smallImg} style={{ height: "100%", width: "auto" }} alt="Imagen de producto" />}
            </div>
          }
          {
            components?.mobo && <div className="Mobo" onClick={(e) => handleDrawer(e)}>
              {components?.mobo && <img src={components.mobo.images[0].smallImg} style={{ height: "100%", width: "auto" }} alt="Imagen de producto" />}
            </div>
          }
          {
            components?.power && <div className="Power" onClick={(e) => handleDrawer(e)}>
              {components?.power && <img src={components.power.images[0].smallImg} style={{ height: "100%", width: "auto" }} alt="Imagen de producto" />}
            </div>
          }
          {components?.ram && <div className="Ram" onClick={(e) => handleDrawer(e)}>
            {components?.ram && <img src={components.ram.images[0].smallImg} style={{ width: "100%", height: "auto" }} alt="Imagen de producto" />}
          </div>
          }
          {
            components?.storage && <div className="Storage" onClick={(e) => handleDrawer(e)}>
              {components?.storage && <img src={components.storage.images[0].smallImg} style={{ height: "100%", width: "auto" }} alt="Imagen de producto" />}
            </div>
          }
          {
            components?.cooler && <div className="Cooler" onClick={(e) => handleDrawer(e)}>
              {components?.cooler && <img src={components.cooler.images[0].smallImg} style={{ height: "100%", width: "auto" }} alt="Imagen de producto" />}
            </div>
          }
          {
            components?.processor && <div className="Processor" onClick={(e) => handleDrawer(e)}>
              {components?.processor && <img src={components.processor.images[0].smallImg} style={{ height: "100%", width: "auto" }} alt="Imagen de producto" />}
            </div>
          }
        </div>
        :
        <div className="ComboResult--Container ComboResult--Container_Details">
          <TableContainer sx={{}}>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell style={{ minWidth: 1 }}>Producto</TableCell>
                  <TableCell style={{ minWidth: 1 }}>Tipo</TableCell>
                  <TableCell style={{ minWidth: 1 }}>Precio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {components && Object.entries(components).filter(comp => comp[1]).map((comp, index) => {
                  return <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell> {comp[1]?.name} </TableCell>
                    <TableCell> {comp[0]} </TableCell>
                    <TableCell> ${comp[1]?.discountedPrice ? comp[1]?.discountedPrice : comp[1]?.price} </TableCell>
                  </TableRow>
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      }
    </ComboResult>
  )
}
