import React from 'react'
import Courses from './Courses'
import Search from './Search'
import Stats from './Stats/Stats'
import WelcomeComp from './WelcomeComp'
const MainContent = () => {
  return (
    <div className='mainContent'>
        <div>
          <Search />
        </div>
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