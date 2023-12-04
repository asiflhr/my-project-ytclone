import React from 'react'

const MainNav = () => {
  return (
    <div className='shadow fixed bg-[#00ccff] z-50 flex h-20 w-full justify-between items-center'>
      <a href='/' className='w-fit'>
        <img src='/logo.png' width='60px' height='auto' alt='homepage' />
      </a>

      <div className=''>
        <span>Home</span>
        <span>Account</span>
      </div>
    </div>
  )
}

export default MainNav
