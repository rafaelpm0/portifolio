import React from 'react'
import TopbarDesktop from './Topbar/TopbarDesktop'
import TopbarMobile from './Topbar/TopbarMobile'


function Header() {
  
  return (
    <header className='w-full px-[16px] fixed top-[25px] flex justify-center z-[2]'>
    <div id='topBar-Desktop' className='w-full hidden lg:block'>
    <TopbarDesktop/>
    </div>
    <div id='topBar-Mobile' className='w-full lg:hidden'>
    <TopbarMobile/>
    </div>
   </header>
  )
}

export default Header
