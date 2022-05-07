import React from 'react'
import './Box.css'
const Box = ({status,textColour}) => {
  return (
    <div className='box' style={{color:`${textColour}`}}>
        <div className='box-content'>
            {status}
        </div>        
    </div>
  )
}

export default Box