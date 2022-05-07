import React from 'react'
import './Weekdays.css'
const Weekdays = ({day,barWidth,barBg}) => {
  return (
      <div className='weekdays-container'>

            <div className='day1'>Mon</div>
            <div className='bar1'>
                <div className='bar-progress1'>
                </div> 
            </div>

            <div className='day2'>Tue</div>
            <div className='bar2'>
                <div className='bar-progress2'>
                </div> 
            </div>

            <div className='day3'>Wed</div>
            <div className='bar3'>
                <div className='bar-progress3'>
                </div> 
            </div>

            <div className='day4'>Thu</div>
            <div className='bar4'>
                <div className='bar-progress4'>
                </div> 
            </div>

            <div className='day5'>Fri</div>
            <div className='bar5'>
                <div className='bar-progress5'>
                </div> 
            </div>

            <div className='day6'>Sat</div>
            <div className='bar6'>
                <div className='bar-progress6'>
                </div> 
            </div>

            <div className='day7'>Sun</div>
            <div className='bar7'>
                <div className='bar-progress7'>
                </div> 
            </div>

            
      </div>
    
  )
}

export default Weekdays