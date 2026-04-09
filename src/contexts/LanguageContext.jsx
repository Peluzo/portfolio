import React, { createContext, useState, useContext, useEffect } from 'react'
import { isSupportedLanguage } from '../constants/languages'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && isSupportedLanguage(savedLanguage)) {
      return savedLanguage
    }
    return 'en' // Default: English (pt and fr remain options in the navbar)
  })

  const htmlLang = language === 'pt' ? 'pt-BR' : language === 'fr' ? 'fr' : 'en'

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = htmlLang
  }, [language, htmlLang])

  const changeLanguage = (lang) => {
    if (isSupportedLanguage(lang)) {
      setLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext


