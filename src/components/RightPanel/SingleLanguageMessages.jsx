import React from 'react'
import Box from '../Box/Box'
import './SingleLanguageMessages.css'

const SingleLanguageMessages = ({icon,message,time,bgColor}) => {
  return (
    <div className='language-msg-container'>
        <div>
        <Box status={icon} textColour='black' bgColor={bgColor} />
        </div>
        <div>
            <div className='language-work'>
                {message}
            </div>
            <div className='lang-timer'>{time}</div>
        </div>       
    </div>
  )
}

export default SingleLanguageMessages