import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
    <div className='profile-container'>
        <div className='avatar'>
        <svg className='add-icon' width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.811 6.813H6.505V10.195H3.427V6.813H0.121V3.906H3.427V0.505H6.505V3.906H9.811V6.813Z" fill="#FEFEFE"/>
        </svg>

        </div>
        <div className='name'>
            Sadia Tasnim
        </div>
        <div className='work'>Student</div>
    </div>
  )
}

export default Profile