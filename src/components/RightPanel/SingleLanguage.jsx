import React from 'react'
import Box from '../Box/Box'
import './SingleLanguage.css'
const SingleLanguage = ({status,language,level}) => {
  return (
    <div className='single-language-container'>
        <div className='box1'>
        <Box status={status} textColour='black' />
        </div>
        <div className='lang-content'>
            <div className='language'>
                {language}
            </div>
            <div className='level'>{level}</div>
        </div>
        
        <div className='progress-gray'>
            <div className='progress'>
            </div>
        </div>
        
    </div>
  )
}

export default SingleLanguage