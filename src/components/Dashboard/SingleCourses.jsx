import React from 'react'
import Box from '../Box/Box'
import './SingleCourses.css'
const SingleCourses = ({status,bgColor,textColour,course,specification,courseBgColor}) => {
  return (
    <div className='single-course-container' style={{backgroundColor:`${courseBgColor}`}}>
        <div className='single-box-content'>
            <Box status={status} textColour={textColour} bgColor={bgColor} />
        </div>
        <div >
            <div className='course-language'>
                {course}
            </div>
            <div className='course-level'>{specification}</div>
        </div>     
        <div>
        <svg className='arrow-icon' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_10_33)">
            <path d="M15.416 6.60468L12.83 4.01935C12.705 3.89437 12.5354 3.82416 12.3587 3.82416C12.1819 3.82416 12.0124 3.89437 11.8873 4.01935C11.7624 4.14437 11.6921 4.31391 11.6921 4.49068C11.6921 4.66746 11.7624 4.837 11.8873 4.96202L14.2573 7.33335H0.666667C0.489856 7.33335 0.320286 7.40359 0.195262 7.52861C0.0702379 7.65364 0 7.8232 0 8.00002H0C0 8.17683 0.0702379 8.3464 0.195262 8.47142C0.320286 8.59644 0.489856 8.66668 0.666667 8.66668H14.298L11.8873 11.0767C11.8253 11.1386 11.7762 11.2121 11.7426 11.2931C11.7091 11.374 11.6918 11.4607 11.6918 11.5483C11.6918 11.636 11.7091 11.7227 11.7426 11.8036C11.7762 11.8846 11.8253 11.9581 11.8873 12.02C12.0124 12.145 12.1819 12.2152 12.3587 12.2152C12.5354 12.2152 12.705 12.145 12.83 12.02L15.4167 9.43402C15.7906 9.05813 16.0005 8.54943 16.0004 8.01921C16.0002 7.48899 15.7901 6.98039 15.416 6.60468Z" fill="white" fill-opacity="0.8"/>
            </g>
            <defs>
            <clipPath id="clip0_10_33">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>  
    </div>
  )
}

export default SingleCourses