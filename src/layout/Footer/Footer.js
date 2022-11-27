import React from 'react'
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { BiEnvelope } from "react-icons/bi"
import zuliaheart from "assets/zuliaheart.png"
import { Logo } from 'components/Logo'
import { FooterDiv } from 'styles/Footer/FooterStyles'
import { Separator } from 'styles/Separator'
import Image from 'next/image'
import styles from "styles/Header.module.css"

export const Footer = () => {
  return (
    <FooterDiv>
      <Separator/>
      <div>
        <section className="Footer--storeInfo">
          <Logo 
          footer
          />

          <p>Te damos hardware de alto rendimiento y marca, a precios razonables, para que tengas una mejor experiencia gaming o de trabajo (diseño gráfico, desarrollo web, etc.).</p>

          <p><span>Made in Zulia</span><span><Image src={zuliaheart} className="Footer--zuliaHeart" width="22.33" height="20" alt="Zulia Heart"></Image></span></p>
        </section>
        <section className="Footer--contactInfoTitle">
          <div className="Footer--contactInfoHeading">
            <h2 className="Footer--footerContactH2">¿Necesitas ayuda?</h2>

            <p>Conversa con nosotros de lunes a domingo de 9:00 am a 6:00 pm</p>
          </div>

          <div className="Footer--contactInfoList">
            <p><span><FaWhatsapp
              className=""
              size="23"
              fill="#2E88CA"
            /></span><span>Escríbenos al <span className="Footer--blueText">(+58) 424-6114465</span></span></p>

            <p><span><FaInstagram
              className=""
              size="23"
              fill="#2E88CA"
            /></span><span>Envíanos un MP a <span className="Footer--blueText">@marateca.ve</span></span></p>

            <p><span><BiEnvelope
              className=""
              size="23"
              fill="#2E88CA"
            /></span><span>Escríbenos a <span className="Footer--blueText">maratecave@gmail.com</span></span></p>
          </div>
        </section>
      </div>
      <Separator/>
      <div className="CvFooter">
        <div className="CvFooter--Github">
        <a href="https://github.com/DeltaQuery" target="_blank">Github</a>
        </div>
        <div className="CvFooter--MadeBy">
        <a href="https://github.com/DeltaQuery/discordClone" target="_blank">Repository</a>
        </div>
        <div className="CvFooter--Linkedin">
        <a href="https://www.linkedin.com/in/carlos-e-bracho/" target="_blank">Linkedin</a>
        </div>
    </div>
    </FooterDiv>
  )
}
