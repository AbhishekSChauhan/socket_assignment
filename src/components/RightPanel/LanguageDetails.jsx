import React from 'react'
import SingleLanguage from './SingleLanguage'

const LanguageDetails = () => {
  return (
    <div>
      <SingleLanguage status='B2' language='English' level='High Intermediate' progressWidth='55px' />
      <SingleLanguage status='C1' language='Spanish' level='Advanced' progressWidth='90px' />
    </div>
  )
}

export default LanguageDetails