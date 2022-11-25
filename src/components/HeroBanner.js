import React, { useState, useEffect } from 'react'
import heroBanner from "assets/banners/hero.jpg"
import Image from 'next/image'
import styles from "styles/Hero.module.css"

export const HeroBanner = () => {
    const [size, setSize] = useState()

    const handleResize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        setSize(window.innerWidth)
        window.addEventListener("resize",handleResize)
        return () => {
            window.removeEventListener("resize",handleResize)
        }
    }, [])
    
    return (
        <div className={styles.HeroBanner}>
            {size ?
          <Image
            src={heroBanner}
            className="HeroImg"
            alt="Store hero banner"
            priority
            style={{ width: "100%", objectFit: "cover", height: size > 1200 ? "auto" : "260px", margin: "auto"}}
            />  
            : 
            <div style={{ height: "260px" }}></div>
            }
        </div>
        
    )
}
