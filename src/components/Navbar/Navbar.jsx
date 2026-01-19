import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../utils/translations'
import './Navbar.css'

const Navbar = () => {
  const { language, changeLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Update active section
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset
      const navHeight = 70
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - navHeight - 100
        const sectionId = section.getAttribute('id')
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangMenuOpen && !event.target.closest('.language-selector')) {
        setIsLangMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isLangMenuOpen])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    const targetSection = document.querySelector(`#${targetId}`)
    if (targetSection) {
      const navHeight = 70
      const targetPosition = targetSection.offsetTop - navHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleLanguageChange = (lang) => {
    changeLanguage(lang)
    setIsLangMenuOpen(false)
  }

  const navLinks = [
    { id: 'home', key: 'nav.home' },
    { id: 'about', key: 'nav.about' },
    { id: 'skills', key: 'nav.skills' },
    { id: 'experience', key: 'nav.experience' },
    { id: 'education', key: 'nav.education' },
    { id: 'tech', key: 'nav.tech' },
    { id: 'contact', key: 'nav.contact' }
  ]

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ]

  const currentLang = languages.find(lang => lang.code === language)

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Portfolio</a>
        </div>
        <div className="nav-right">
          <div className="language-selector">
            <button 
              className="language-btn"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              aria-label="Select language"
            >
              <span>{currentLang?.flag}</span>
              <span className="language-code">{currentLang?.code.toUpperCase()}</span>
            </button>
            {isLangMenuOpen && (
              <div className="language-menu">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    className={`language-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {getTranslation(language, link.key)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
