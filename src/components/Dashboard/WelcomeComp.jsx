import React from 'react'
import './Welcome.css'

const WelcomeComp = () => {
  return (
    <div className='welcome-container'>
      <div className='welcome-greet'>
        Welcome back Anna
      </div>
      <div className='welcome-msg'>
        You've learned 80% of your goal this week!
      </div>
      <div className='welcome-msg2'>
        Keep it up and improve your results!
      </div>
    </div>
  )
}

export default WelcomeComp