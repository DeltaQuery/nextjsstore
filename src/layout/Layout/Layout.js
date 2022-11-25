import { useEffect } from 'react'
import { Footer } from 'layout/Footer/Footer'
import { Header } from 'layout/Header/Header'
import { Sidebar } from 'layout/Sidebar/Sidebar'
import { Sidecart } from 'layout/Sidecart/Sidecart'
import { setSidebar, setSidecart } from 'slices/uiSlice'
import { useDispatch } from 'react-redux'
import React from 'react'

export const Layout = ({ children }) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        setTimeout(() => {
          dispatch(setSidebar(false))
          dispatch(setSidecart(false))
        }, 100)
    })

    return (
        <>
            <Header />
            <Sidebar />
            <Sidecart />
            {children}
            <Footer />
        </>
    )
}
