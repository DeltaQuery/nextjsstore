import React from 'react'
import { Logo } from 'components/Logo'
import { AdNav } from 'styles/Admin/AdHeaderStyles'
import Link from 'next/link'
import { logoutService } from 'services/authService'

export const AdHeader = () => {
  const handleLogout = () => {
    logoutService()
  }
  return (
    <AdNav>
        <div className="NavContainer">
           <div className="LeftNav">
        <Logo 
        logo="whitelogo"
        height={["36px","40px"]}
        />
      </div> 
      <div className="RightNav">
        <ul className="RightNav__Menu">
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/admin/dashboard">Dashboard</Link></li>
            <li><Link onClick={ handleLogout } href="/admin/login">Logout</Link></li>
        </ul>
      </div> 
        </div>
      
    </AdNav>
  )
}
