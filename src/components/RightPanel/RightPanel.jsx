import React from 'react'
import Logout from './Logout'
import './RightPanel.css'
const RightPanel = () => {
  return (
    <div className='RightPanel'>
      <div className='logout-container'>
        <Logout />
      </div>
    </div>
  )
}

export default RightPanel