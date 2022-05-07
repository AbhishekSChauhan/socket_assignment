import React from 'react'
import './TimeSpent.css'
import Weekdays from './Weekdays'
const TimeSpentStats = () => {
  return (
    <div>
        <div className='headin'>Time Spent on Learning</div>
        <select className='select'>
            <option>Last week</option>
        </select>
        <div>
          <Weekdays />
          {/* <Weekdays barWidth='110px' barBg='#FF808B' /> */}
        </div>
        <div className='indicators'>
          <div className='ind-1'><span className='ind-Val'>Vocabulary</span></div>
          <div className='ind-2'> <span className='ind-Val'>Grammar</span></div>
          <div className='ind-3'><span className='ind-Val'>Listening</span> </div>
          <div className='ind-4'> <span className='ind-Val'>Writing</span></div>
        </div>
    </div>
  )
}

export default TimeSpentStats