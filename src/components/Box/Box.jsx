import React from 'react'
import './Box.css'
const Box = ({status,textColour,bgColor}) => {
  return (
    <div className='box' style={{color:`${textColour}`,background:`${bgColor}`}}>
        <div className='box-content'>
            {status}
        </div>        
    </div>
  )
}

export default Box