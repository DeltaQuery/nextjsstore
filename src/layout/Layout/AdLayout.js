import React, { useEffect } from 'react'
import { Footer } from 'layout/Footer/Footer'
import { AdHeader } from 'components/Admin/AdHeader'

export const AdLayout = ({ children }) => {

    return (
        <>
            <AdHeader />
            {children}
            <Footer />
        </>
    )
}
