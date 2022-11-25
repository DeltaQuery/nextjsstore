import React from 'react'
import styles from "styles/Header.module.css"
import { Logo } from 'components/Logo'
import { MenuIcon } from './MenuIcon'
import { CartIcon } from './CartIcon'
import { Search } from './Search'

export const Header = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.LeftNav}>
        <Logo 
        logo="whitelogo"
        height={["36px","40px"]}
        />
        <MenuIcon />
        <Search />
      </div> 
      <CartIcon /> 
    </div>
  )
}
