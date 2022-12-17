import React, { useEffect } from 'react'
import { ComboResult } from 'styles/Combo/ComboStyles'

export const ResultCombo = ({ components, setChosenProduct, chosenProduct, setDrawer, drawer }) => {

  const openDrawer = (product) => {
    setChosenProduct(product)
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

  return (
    <ComboResult>
      {/*<Image src={comboSample} alt="ComboImg" className="ResultImage" />*/}
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
    </ComboResult>
  )
}
