import React from 'react'
import SingleLanguage from './SingleLanguage'

const LanguageDetails = () => {
  return (
    <div>
      <SingleLanguage status='B2' language='English' level='High Intermediate' />
      <SingleLanguage status='C1' language='Spanish' level='Advanced' />
      <SingleLanguage status='C1' language='Spanish' level='Advanced' />
    </div>
  )
}

export default LanguageDetails