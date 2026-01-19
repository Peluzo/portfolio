import React, { useEffect, useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../utils/translations'
import './About.css'

const About = () => {
  const { language } = useLanguage()
  const aboutRef = useRef(null)

  useEffect(() => {
    if (!aboutRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = aboutRef.current.querySelectorAll('.fact-card')
    elements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">{getTranslation(language, 'about.title')}</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              {getTranslation(language, 'about.intro')}
            </p>
            <p>
              {getTranslation(language, 'about.paragraph1')}
            </p>
            <h3>{getTranslation(language, 'about.motivationTitle')}</h3>
            <p>
              {getTranslation(language, 'about.paragraph2')}
            </p>
            <p>
              {getTranslation(language, 'about.paragraph3')}
            </p>
          </div>
          <div className="about-facts">
            <div className="fact-card">
              <h4>{getTranslation(language, 'about.currentRole')}</h4>
              <p>🤖 {getTranslation(language, 'about.currentRoleValue')}</p>
              <p>🏢 {getTranslation(language, 'about.company')}</p>
              <p>📍 {getTranslation(language, 'about.locationValue')}</p>
            </div>
            <div className="fact-card">
              <h4>{getTranslation(language, 'about.languages')}</h4>
              <p>🇧🇷 {getTranslation(language, 'about.portuguese')}</p>
              <p>🇬🇧 {getTranslation(language, 'about.english')}</p>
              <p>🇪🇸 {getTranslation(language, 'about.spanish')}</p>
              <p>🇫🇷 {getTranslation(language, 'about.french')}</p>
            </div>
            <div className="fact-card">
              <h4>{getTranslation(language, 'about.location')}</h4>
              <p>📍 {getTranslation(language, 'about.locationValue')}</p>
              <p>🇨🇦 {getTranslation(language, 'about.country')}</p>
            </div>
            <div className="fact-card">
              <h4>{getTranslation(language, 'about.specialties')}</h4>
              <p>🤖 {getTranslation(language, 'about.ml')}</p>
              <p>💻 {getTranslation(language, 'about.fullstack')}</p>
              <p>📊 {getTranslation(language, 'about.datascience')}</p>
              <p>🚀 {getTranslation(language, 'about.aisolutions')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
