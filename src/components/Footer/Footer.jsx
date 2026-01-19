import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../utils/translations'
import './Footer.css'

const Footer = () => {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} | Portfolio. {getTranslation(language, 'footer.copyright')}</p>
        <div className="footer-tags">
          <span>Machine Learning</span>
          <span>Full-Stack</span>
          <span>Inteligência Artificial</span>
          <span>Data Science</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
