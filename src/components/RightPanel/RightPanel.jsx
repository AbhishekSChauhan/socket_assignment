import React from 'react'
import LanguageMessages from './LanguageMessages'
import LanguageDetails from './LanguageDetails'
import Logout from './Logout'
import Profile from './Profile'
import './RightPanel.css'
const RightPanel = () => {
  return (
    <div className='RightPanel'>
      <div className='logout-container'>
        <Logout />
      </div>
      <div className='profile-container'>
        <Profile />
      </div>
      <div className='language-container'>
        <LanguageDetails />
      </div>
      <div className='langDeatails-container'>
        <LanguageMessages />
      </div>
    </div>
  )
}

export default RightPanel