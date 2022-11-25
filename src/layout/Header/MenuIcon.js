import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { BiX } from 'react-icons/bi'
import styles from "styles/Header.module.css"
import { useSwiper } from 'hooks/useSwiper'

export const MenuIcon = () => {
  const { sidebar, handleSidebar, sidecart, handleSidecart } = useSwiper()

  const openSidebar = () => {

    if (!sidebar && !sidecart) {
      handleSidecart(false)
      handleSidebar(true)
    } else if (sidebar) {
      handleSidebar(false)
      handleSidecart(false)
    }
    if (!sidebar && sidecart) {
      handleSidecart(false)
      handleSidebar(false)
    } else if (sidebar) {
      handleSidebar(false)
      handleSidecart(false)
    }
  }

  return (
    <div className={styles.MenuDiv} onClick={openSidebar}>
      {(!sidebar && !sidecart) ?
        <BiMenu
          className={styles.MenuIcon}
          size="32"
          fill="white"
        />
        :
        <BiX
          className={styles.MenuIcon}
          size="32"
          fill="white"
        />
      }
      <span className={styles.NavText}>Menú</span>
    </div>
  )
}
