import React from 'react'
import LeftPanel from '../LeftPanel/LeftPanel'
import RightPanel from '../RightPanel/RightPanel'
import './Dashboard.css'
import MainContent from './MainContent'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='leftPanel'>
            <LeftPanel />
        </div>

        <div className='main'>
          <div className='main-container'>
            <MainContent />
          </div>            
        </div>

        <div className="rightPanel">
            <RightPanel  />
        </div>        
    </div>
  )
}

export default Dashboard