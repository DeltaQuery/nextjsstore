import React from 'react'
import Link from 'next/link'
import mainlogo from "assets/logos/mainlogo.png"
import whitelogo from "assets/logos/whitelogo.png"
import Image from 'next/image'
import styles from "styles/Header.module.css"

export const Logo = ({ logo = "mainlogo", footer = false }) => {

  const logoImg = (logotype) => {
    if (logotype === "mainlogo") {
      return mainlogo
    } else {
      return whitelogo
    }
  }

  return (
    <Link href="/">
      <div className={footer ? styles.FooterLogoImg : styles.LogoImg}>
        <Image
          src={logoImg(logo)}
          alt="Store logo"
          fill
          sizes="(max-width: 600px) 120px, 240px"
          />
      </div>

    </Link>
  )
}
