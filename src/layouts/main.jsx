import React from 'react'
import MainNav from '../components/UI/nav/mainNav'

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainNav />
      {children}
    </div>
  )
}

export default MainLayout
