import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export const Whatsapp = () => {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=584246114465&text=¡Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos."
            className="float" target="_blank">
            <FaWhatsapp className="my-float" size={36}/>
        </a>
    )
}