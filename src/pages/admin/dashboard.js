import React from 'react'
import { AdLayout } from 'layout/Layout/AdLayout'
import { Main } from 'styles/View/ViewStyles'
import { useAuth } from 'hooks/useAuth'

const Dashboard = () => {
  const { auth } = useAuth()
  
  if(!auth){ 
    return <Main>Loading...</Main>
  }
  return (
    <>
    { auth && 
    <Main>dashboard

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