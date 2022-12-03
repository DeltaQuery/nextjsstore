import React, { useEffect, useState } from 'react'
import { AdLayout } from 'layout/Layout/AdLayout'
import { Main } from 'styles/View/ViewStyles'
import { useAuth } from 'hooks/useAuth'
import ProductsTable from 'components/Admin/ProductsTable'
import { useRouter } from 'next/router'
import MuiAlert from 'components/MuiAlert'

const Dashboard = () => {
  const [alert, setAlert] = useState(false)
  const { auth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const { query: { alertState } } = router
    if(alertState) setAlert(true)
  },[])
  
  if(!auth){ 
    return <Main>Checking auth...</Main>
  }

  return (
    <>
    { (auth) && 
    <Main>
      <ProductsTable>
      <SuccessAlert alert={alert} setAlert={setAlert} />
      </ProductsTable>
    </Main>
    }
    </>
  )
}

export default Dashboard

Dashboard.getLayout = function getLayout(page) {
    return (
      <AdLayout>
        {page}
      </AdLayout>
    )
  }

  const SuccessAlert = ({ alert, setAlert, alertType = "success", alertText = "Producto actualizado correctamente." }) => {
    return <MuiAlert alert={alert} setAlert={setAlert} alertType={alertType} alertText={alertText} />
}