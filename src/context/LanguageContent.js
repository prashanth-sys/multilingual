import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'English',
  changeLanguage: () => {},
})

export default LanguageContext
