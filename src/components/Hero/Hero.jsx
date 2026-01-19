import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../utils/translations'
import './Hero.css'

// Para adicionar sua foto:
// 1. Coloque sua imagem na pasta: src/assets/images/profile.jpg (ou .png, .webp)
// 2. Descomente a linha de import abaixo e ajuste o nome do arquivo se necessário
// 3. O componente irá exibir automaticamente sua foto

// Descomente esta linha e ajuste o caminho/nome do arquivo se necessário:
import profilePhoto from '../../assets/images/profile.jpg'

// Se você usar outro nome ou extensão, ajuste o import:
// import profilePhoto from '../../assets/images/sua-foto.png'

// Por enquanto, deixe como null para usar o placeholder
// const profilePhoto = null

const Hero = () => {
  const { language } = useLanguage()
  const heroRef = useRef(null)
  const [imageError, setImageError] = useState(!profilePhoto)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      if (heroRef.current && scrolled < window.innerHeight) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (targetId) => {
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

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">{getTranslation(language, 'hero.greeting')}</p>
            <h1 className="hero-name">{getTranslation(language, 'hero.name')}</h1>
            <h2 className="hero-title">{getTranslation(language, 'hero.title')}</h2>
            <p className="hero-description">
              {getTranslation(language, 'hero.description')}
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => handleClick('contact')}
              >
                {getTranslation(language, 'hero.contactBtn')}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => handleClick('about')}
              >
                {getTranslation(language, 'hero.resumeBtn')}
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              {profilePhoto && !imageError ? (
                <img 
                  src={profilePhoto}
                  alt="Foto de perfil" 
                  className="profile-photo"
                  onError={handleImageError}
                />
              ) : (
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="placeholder-svg">
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="100" cy="85" r="25" fill="currentColor"/>
                  <path d="M60 140 Q100 120 140 140" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
