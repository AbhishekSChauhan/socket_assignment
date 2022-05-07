import React from 'react'
import Courses from './Courses'
import Stats from './Stats'
import WelcomeComp from './WelcomeComp'
const MainContent = () => {
  return (
    <div className='mainContent'>
        <div>
          <WelcomeComp />
        </div>
        <div>
          <Stats />
        </div>
        <div>
          <Courses />
        </div>
    </div>
  )
}

export default MainContent