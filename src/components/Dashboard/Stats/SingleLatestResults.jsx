import React from 'react'
import './SingleLatestResults.css'
const SingleLatestResults = ({unit,topic,percent,percentColor}) => {
  return (        
    <div className='latest-result-container'>
        <div>
            <div className='unit'>
                {unit} - <span className='topic'>{topic}</span>
            </div>
            {/* <div className='topic'>{topic}</div> */}
        </div>
        
        <div className='progress-res-gray'>
            <div className='progress-res'>
            </div>            
        </div> 
        <div className='percent' style={{color:percent >= 40 ? '#5E81F4':'#FF808B'}}>{percent}%</div>       
    </div>

  )
}

export default SingleLatestResults