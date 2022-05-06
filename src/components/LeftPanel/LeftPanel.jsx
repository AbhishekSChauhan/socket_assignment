import React from 'react'
import Button from '../Button/Button'
import './LeftPanel.css'
import SideMenu from './SideMenu'
const LeftPanel = () => {
  return (
    <div className='LeftPanel'>
            <span>
                <img className='logo' src='' alt='logo' />
                <p className='title'>Stingle</p>
            </span>
            <div className='sidemenu'>
                <SideMenu />
            </div> 
            <div>
                <Button buttonText='Upgrade'/> 
            </div>                          
    </div>
  )
}

export default LeftPanel