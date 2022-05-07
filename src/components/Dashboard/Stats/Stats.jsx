import React from 'react'
import LatestResults from './LatestResults'
import './Stats.css'
import TimeSpentStats from './TimeSpentStats'
const Stats = () => {
  return (
    <div>
      <div className='latest-results-container'>
        <LatestResults />
      </div>
      <div className='time-spent-container'>
        <TimeSpentStats />
      </div>

    </div>
    
  )
}

export default Stats